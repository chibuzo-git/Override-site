# Override Final SEO Website

Upload-ready website for https://override-app.org.

- 58 HTML pages
- 38 long-tail/resource pages
- Marketing-pillars structure on all new search pages
- Exact mission sequence intentionally omitted
- Canonicals, metadata, sitemap, robots.txt, internal links, redirects
- Existing blog articles retained

## Upload
Replace the current repository contents with this folder, commit, and push. Then confirm `/`, `/resources/`, `/sitemap.xml`, and `/robots.txt`.

Google Analytics was not added because the current privacy policy states that Override does not use analytics SDKs or third-party trackers. Google Search Console does not require adding visitor analytics.


## Activate Google Analytics 4

The website includes a consent-based GA4 integration, but it is intentionally inactive
until you add your Measurement ID.

1. Create a Google Analytics 4 property and Web data stream for `https://override-app.org`.
2. Copy the Measurement ID. It begins with `G-`.
3. Open `assets/analytics.js`.
4. Replace `G-REPLACE_ME` with your real Measurement ID.
5. Commit and push the change.
6. In GA4, enable Enhanced Measurement.
7. After testing, mark the custom `app_store_click` event as a key event.

Analytics loads only after the website visitor accepts. Declining leaves the Google tag
unloaded. The mobile app remains analytics-free and its on-device recovery data is not
accessible to the website or Google Analytics.


GA4 Measurement ID configured: `G-576LWHTV02`.

- Added a non-clickable `Coming Soon to Google Play` CTA beside App Store download buttons.


- Updated privacy policy, terms, and metadata to describe Override as a mobile application rather than an iOS-only product.
- Platform-specific APIs are now referenced only as implementation examples, not as the identity of the service.
- Purchases and subscription language now covers both Apple App Store and Google Play.

