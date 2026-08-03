
/*
  Override website analytics

  1. Create a GA4 web data stream.
  2. Replace G-REPLACE_ME below with the Measurement ID shown by Google.
  3. Analytics remains disabled until the visitor accepts website analytics.
  4. This script runs only on override-app.org. It has no access to the Override
     mobile app, app storage, selected shielded apps, intervention activity,
     camera processing, personal reasons, personalized intervention content, clean timer, or settings.
*/
(() => {
  "use strict";

  const GA_MEASUREMENT_ID = "G-576LWHTV02";
  const CONSENT_KEY = "override_website_analytics_consent";
  const APP_STORE_HOST = "apps.apple.com";

  const validMeasurementId =
    /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) &&
    GA_MEASUREMENT_ID !== "G-REPLACE_ME";

  function rememberConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {
      // Consent still applies for the current page if storage is unavailable.
    }
  }

  function readConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (_) {
      return null;
    }
  }

  function updateConsentButtonText() {
    const button = document.querySelector("[data-open-cookie-settings]");
    if (!button) return;
    button.textContent = readConsent() === "granted"
      ? "Analytics settings"
      : "Cookie settings";
  }

  function loadAnalytics() {
    if (!validMeasurementId || window.__overrideGaLoaded) return;
    window.__overrideGaLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(script);

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || !window.gtag) return;

      try {
        const url = new URL(link.href, window.location.href);
        if (url.hostname === APP_STORE_HOST) {
          window.gtag("event", "app_store_click", {
            link_url: url.href,
            link_text: (link.textContent || "").trim(),
            page_location: window.location.href
          });
        }
      } catch (_) {
        // Ignore malformed links.
      }
    });
  }

  function removeBanner() {
    document.getElementById("analytics-consent")?.remove();
  }

  function grant() {
    rememberConsent("granted");
    removeBanner();
    loadAnalytics();
    updateConsentButtonText();
  }

  function deny() {
    rememberConsent("denied");
    removeBanner();
    updateConsentButtonText();
  }

  function resetConsent() {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch (_) {}
    showBanner();
  }

  function showBanner() {
    if (document.getElementById("analytics-consent")) return;

    const banner = document.createElement("section");
    banner.id = "analytics-consent";
    banner.className = "analytics-consent";
    banner.setAttribute("aria-label", "Website analytics consent");
    banner.innerHTML = `
      <div class="analytics-consent__inner">
        <div>
          <h2>Private app. Optional website analytics.</h2>
          <p>
            Override can use Google Analytics on this public website to understand
            how visitors use the site and improve the website experience.
            Analytics cannot access or track anything inside the Override app.
          </p>
          <a href="/privacy.html#website-analytics">Read the website analytics policy</a>
        </div>
        <div class="analytics-consent__actions">
          <button type="button" class="consent-button consent-button--secondary"
                  data-consent-deny>Decline</button>
          <button type="button" class="consent-button consent-button--primary"
                  data-consent-accept>Accept analytics</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    banner.querySelector("[data-consent-accept]")?.addEventListener("click", grant);
    banner.querySelector("[data-consent-deny]")?.addEventListener("click", deny);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const consent = readConsent();

    if (consent === "granted") {
      loadAnalytics();
    } else if (consent !== "denied") {
      showBanner();
    }

    document
      .querySelectorAll("[data-open-cookie-settings]")
      .forEach((button) => button.addEventListener("click", resetConsent));

    updateConsentButtonText();

    if (!validMeasurementId) {
      console.info(
        "Override GA4 is prepared but inactive. Replace G-REPLACE_ME in assets/analytics.js."
      );
    }
  });
})();
