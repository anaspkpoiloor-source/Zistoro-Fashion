/* ZISTORO central settings. Edit values here; every page reads from this file.
   Used by index.html, shipping-policy.html and return-replacement-policy.html. */
(function () {
  var Z = window.ZIS = {
    contact: {
      whatsapp: "919074942439",        // country code + number, no + or spaces
      email: "zistorofashion@gmail.com",   // primary email
      instagram: "zistoro.official"
    },
    shipping: {
      dispatchTime: "1\u20133 working days",                  // time before the parcel is dispatched
      deliveryTime: "4\u20138 working days after dispatch"    // estimate only, never a guarantee
    },
    returns: {
      reportWindow: "48 hours"       // how soon after delivery a damaged/defective/incorrect item must be reported
    },
    policyUpdated: ""                // optional, e.g. "2 November 2026". Shown on the policy pages when filled.
  };
  var c = Z.contact;
  c.whatsappDisplay = "+" + c.whatsapp.slice(0, 2) + " " + c.whatsapp.slice(2);
  c.instagramHandle = "@" + c.instagram;
  Z.waLink = function (t) { return "https://wa.me/" + c.whatsapp + (t ? "?text=" + encodeURIComponent(t) : ""); };
  Z.fill = function () {
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var v = el.getAttribute("data-cfg").split(".").reduce(function (o, k) { return o && o[k]; }, Z);
      if (!v) return;
      el.textContent = (el.getAttribute("data-prefix") || "") + v;
      var l = el.getAttribute("data-link");
      if (l === "wa") el.href = Z.waLink();
      if (l === "mail") el.href = "mailto:" + c.email;
      if (l === "ig") el.href = "https://www.instagram.com/" + c.instagram;
    });
  };
})();
