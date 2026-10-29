/* Ember & Oak — working subscription flow.
   Blend, frequency, grind, and add-ons update the summary and total
   live; submitting validates the email and ends in a confirmation
   state. Front-end demo only: no real subscription, no email sent. */
(function () {
  "use strict";

  var BAG_PRICES = { "ember": 18, "first": 17, "night": 19, "surprise": 18 };
  var DECAF_PRICE = 17;
  var SHIP_FLAT = 4;
  var FREE_OVER = 38;
  var BLEND_KEY = "ember-oak-blend";

  function money(n) { return "$" + n; }

  /* ---------- blends page: choosing a blend pre-selects it on subscribe ---------- */
  function initBlends() {
    var links = document.querySelectorAll("[data-blend-link]");
    Array.prototype.forEach.call(links, function (a) {
      a.addEventListener("click", function () {
        try { localStorage.setItem(BLEND_KEY, a.getAttribute("data-blend-link")); } catch (e) {}
      });
    });
  }

  /* ---------- subscribe page ---------- */
  function initSubscribe() {
    var form = document.getElementById("subscribe-form");
    if (!form) return;
    var blend = document.getElementById("blend");
    var freq = document.getElementById("freq");
    var grind = document.getElementById("grind");
    var email = document.getElementById("email");
    var gift = document.getElementById("gift");
    var decaf = document.getElementById("decaf");
    var btn = document.getElementById("subscribe-btn");
    var err = document.getElementById("err-email");
    var sumDetails = document.getElementById("sum-details");
    var sumLines = document.getElementById("sum-lines");
    var sumNote = document.getElementById("sum-note");
    var confirmation = document.getElementById("sub-confirmation");
    var grid = document.getElementById("subscribe-grid");

    function blendKey() { return blend.value; }
    function blendName() { return blend.options[blend.selectedIndex].text; }

    /* pre-select a blend chosen on the blends page */
    try {
      var saved = localStorage.getItem(BLEND_KEY);
      if (saved) {
        for (var i = 0; i < blend.options.length; i++) {
          if (blend.options[i].value === saved) { blend.selectedIndex = i; break; }
        }
      }
    } catch (e) {}

    function render() {
      var bag = BAG_PRICES[blendKey()] || 18;
      var merch = bag + (decaf.checked ? DECAF_PRICE : 0);
      var shipping = merch >= FREE_OVER ? 0 : SHIP_FLAT;
      var total = merch + shipping;
      sumDetails.innerHTML =
        "<strong>Blend:</strong> " + blendName() + ", 12 oz<br>" +
        "<strong>Frequency:</strong> " + freq.options[freq.selectedIndex].text + "<br>" +
        "<strong>Grind:</strong> " + grind.options[grind.selectedIndex].text + "<br>" +
        "<strong>First roast day:</strong> Tuesday (sample)" +
        (gift.checked ? "<br><strong>Gift:</strong> hand-written first-bag note included (free)" : "");
      var lines = "Bag (subscription price) — " + money(bag) + "<br>";
      if (decaf.checked) lines += "Rotating decaf bag — " + money(DECAF_PRICE) + "<br>";
      lines += "Shipping — " + (shipping === 0 ? "$0 (free over " + money(FREE_OVER) + ")" : money(shipping)) + "<br>";
      lines += "<strong>Total per delivery — " + money(total) + "</strong>";
      sumLines.innerHTML = lines;
      sumNote.textContent = shipping === 0
        ? "Free shipping unlocked — this delivery is " + money(merch) + ", over the " + money(FREE_OVER) + " threshold. Pause, swap, or cancel anytime from your account page."
        : "Free shipping starts at " + money(FREE_OVER) + " — this delivery is " + money(merch) + ", so shipping is " + money(SHIP_FLAT) + ". Pause, swap, or cancel anytime from your account page.";
      btn.textContent = "Start subscription — " + money(total) + " total →";
    }

    [blend, freq, grind, gift, decaf].forEach(function (el) {
      el.addEventListener("change", render);
    });
    email.addEventListener("input", function () { err.classList.remove("show"); email.classList.remove("invalid"); });

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        err.classList.add("show"); email.classList.add("invalid"); email.focus();
        return;
      }
      var ref = "EO-SUB-" + (1000 + Math.floor(Math.random() * 9000));
      document.getElementById("conf-ref").textContent = ref;
      document.getElementById("conf-summary").textContent =
        blendName() + " · " + freq.options[freq.selectedIndex].text + " · " + grind.options[grind.selectedIndex].text +
        (decaf.checked ? " · with rotating decaf bag" : "") + (gift.checked ? " · gift note included" : "");
      document.getElementById("conf-email").textContent = email.value.trim();
      try {
        localStorage.setItem("ember-oak-subscription", JSON.stringify({
          ref: ref, blend: blendKey(), freq: freq.options[freq.selectedIndex].text,
          grind: grind.options[grind.selectedIndex].text, email: email.value.trim()
        }));
      } catch (e) {}
      grid.hidden = true;
      confirmation.hidden = false;
      confirmation.setAttribute("tabindex", "-1");
      confirmation.focus();
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initBlends();
    initSubscribe();
  });
})();
