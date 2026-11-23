# Override AEO audit

Audit and implementation date: November 22, 2026  
Scope: all 66 pre-change HTML pages, shared assets, sitemap, robots rules, redirects, internal links, metadata, structured data, conversion links, and a sample of current search/community results.

## Executive diagnosis

The previous site already had broad topic coverage and valid fundamentals, but its strongest product distinction was not stated quickly or concretely enough. The homepage led with a philosophy before plainly identifying Override as a real-time urge interruption app. How It Works described technology but did not directly answer several purchase questions. The three product comparisons were only about 266–270 words each and did not give buyers a usable factor-by-factor decision. Many resource pages were discoverable but thin, and most had only one inbound link from an index.

The implementation preserves the visual system and existing URLs while making one idea extractable across the site: **Override is a private, self-started urge interruption app for the moment a porn urge is already active. It creates purposeful real-world friction through an active reset and temporary shielding of selected apps.**

This is an AEO change, not a generic keyword expansion. Existing pages were strengthened first. Three new articles were added only for distinct buyer decisions.

## Baseline inventory and technical findings

- 66 HTML pages existed before implementation: 20 blog posts, 38 resource guides, 4 comparison pages including the index, and 4 core/legal pages.
- Every page had one H1, a unique title, a meta description, and a canonical URL.
- No accidental `noindex` directives were present.
- Sitemap and robots.txt were readable and used preferred extensionless URLs.
- All App Store links pointed to the same live listing.
- Google Play badges were disabled and labelled “Coming soon.”
- Root-relative link validation found no missing local target or asset before changes.
- The comparison pages were too short to answer fit, trade-offs, overlap, privacy, and verification questions.
- Forty-two pages had only one internal inbound link, usually from an index. Important articles therefore existed but were weakly connected.
- Some repeated related-link blocks linked a page to itself.
- The resources index contained a double-encoded apostrophe and “How to Block Porn on mobile” copy.
- Several older pages repeated “active guided reset” and exposed unnecessary mechanics in CTA copy.
- The site contains almost no HTML `<img>` elements; the branding imagery is primarily shared Open Graph/favicon assets. No missing image `alt` attributes were found.
- The only external font request is Google Fonts. Scripts are limited to a small disabled-link helper and consent-based GA4. No large framework or unused application bundle exists.

## Buyer decisions identified

The major pre-download decisions are:

1. Do I need ongoing blocking, help during the active urge, or both?
2. What can I do in the first few minutes after an urge begins?
3. Why does my calm decision disappear once I start bargaining?
4. Will this still help if I disable or bypass blockers?
5. Is Override a blocker, streak tracker, accountability app, or something else?
6. What exactly happens after I tap Break the Urge?
7. Are selected apps blocked permanently or only during the intervention?
8. Do I have to involve an accountability partner?
9. Can I use the app without an account or public profile?
10. What sensitive information leaves my device?
11. Is Override appropriate if I want continuous website filtering?
12. How does Override differ from BlockerX, Brainbuddy, and Migiri?
13. Can Override complement therapy, support, or another blocker?
14. What happens after the physical reset ends?
15. Is this a treatment or a self-help utility?

## Buyer prompt and missed-answer map

| Buyer decision / natural-language prompt                          | Best page                                   | Previous answer                                         | Missing information                                                                   | Gap-closing change                                                                                                    |
| ----------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| What is Override?                                                 | Homepage                                    | Partial                                                 | Product category, audience, and moment were not all explicit above the fold           | Rewrote hero to state real-time urge interruption, audience, active moment, friction, shielding, and App Store action |
| What should I do when an urge hits right now?                     | New practical reset article                 | Scattered across short resources                        | One genuinely useful, complete reset sequence                                         | Added an urgent fast answer and a full environment/access/movement/precommitment plan                                 |
| Are blockers enough?                                              | New blockers-vs-interruption article        | Several short blocker pages                             | A neutral mechanism comparison and combination guidance                               | Added decision table, fit, limitations, and layered-use guidance                                                      |
| Why can I decide one thing while calm and another during an urge? | Existing willpower article                  | Overstated neuroscience and dated ego-depletion framing | Supportable explanation using cues, access, sequences, negotiation, and precommitment | Rewrote the existing URL instead of creating a duplicate                                                              |
| Can I use a recovery app privately without a partner?             | New no-accountability article               | Privacy and no-account pages answered parts separately  | A buyer guide comparing private jobs and trade-offs                                   | Added account, storage, monitoring, sharing, and fit checklist                                                        |
| What happens when I press Break the Urge?                         | How It Works                                | Partial                                                 | Direct start-to-finish experience                                                     | Added a fast answer and three-stage experience before technical detail                                                |
| What does Override block?                                         | How It Works                                | Vague                                                   | Selected apps, temporary scope, and distinction from internet-wide filtering          | Added a plain-language temporary-shielding section                                                                    |
| Does shielding end automatically?                                 | How It Works                                | Missing                                                 | Safety-window behavior                                                                | Stated that shielding ends after the intervention window or 15 minutes, matching the App Store listing                |
| Do I need an account or accountability partner?                   | Homepage, How It Works, privacy buyer guide | Mentioned inconsistently                                | Direct objection answer                                                               | Added explicit no-account/no-partner language and a dedicated decision article                                        |
| How is camera processing private?                                 | How It Works                                | Present but buried                                      | Clear distinction between on-device processing and uploading                          | Added direct FAQ answer and kept implementation secondary to experience                                               |
| Override or Migiri?                                               | Existing comparison                         | Thin                                                    | Decision factors, where Migiri fits better, combining tools, verification             | Rebuilt comparison with table, fit, limitations, combination guidance, official source link, and check date           |
| Override or Brainbuddy?                                           | Existing comparison                         | Thin                                                    | Active moment vs ongoing program                                                      | Rebuilt around the different jobs and who may prefer each                                                             |
| Override or BlockerX?                                             | Existing comparison                         | Thin                                                    | Urge state vs access restriction, platform variance, accountability                   | Rebuilt with a factor table and neutral fit guidance                                                                  |
| What if I keep bypassing my blocker?                              | Existing bypass guide                       | Basic                                                   | Connection to active reset and blocker/interruption decision                          | Added links into the new decision cluster                                                                             |
| Is Override medical treatment?                                    | How It Works                                | Legal pages only                                        | Plain buyer-facing limitation                                                         | Added a direct FAQ stating it is a self-help utility, not treatment                                                   |

## Existing pages improved

- `/` — made WHAT, WHO, WHY, HOW, DIFFERENCE, privacy, and App Store action explicit; added approach and question pathways.
- `/how-it-works` — reorganized around the user experience; answered activation, shielding, missions at a high level, timing, privacy, partner requirements, limitations, and fit.
- `/comparisons/` — changed from a product-card list into an approach-first decision hub and stated the comparison standard.
- `/comparisons/override-vs-blockerx` — expanded strict blocking vs active interruption, fit, trade-offs, combination use, platform variance, and official verification.
- `/comparisons/override-vs-brainbuddy` — expanded active intervention vs ongoing program, privacy/community considerations, and combined use.
- `/comparisons/override-vs-migiri` — expanded blocking/recovery platform vs active intervention, accountability, privacy, support, and combined use.
- `/blog/` — added a visible buyer-decision path and preserved discoverability of every existing article.
- `/blog/2026-06-25-why-willpower-fails` — preserved the established URL and replaced unsupported/deterministic neuroscience language with a practical explanation of cues, access, automatic sequences, precommitment, and friction.
- `/resources/why-porn-blockers-alone-fail` — clarified Override’s fit, removed repetitive/self-linking navigation, and linked to the new decision guide.
- `/resources/what-to-do-during-a-porn-urge` — removed an unnecessary named mechanic, clarified the active reset, and linked to the substantial practical plan.
- `/resources/best-porn-blocker-app` — linked buying criteria to approach comparison and bypass guidance.
- `/resources/porn-blocker-vs-accountability-app` — linked to the privacy/no-partner decision path.
- `/resources/porn-blocker-without-account` — linked privacy, partner-free use, and How It Works.
- `/resources/how-to-stop-bypassing-porn-blocker` — connected bypass behavior to the blocker/interruption and urgent-reset cluster.
- `/resources/` — corrected the iPhone title and a double-encoded apostrophe.
- `/assets/styles.css` — added reusable layouts for decision cards, process steps, fast answers, comparison tables, and responsive behavior without changing the brand system.
- `/sitemap.xml` — added all three new canonical URLs.

## New articles and why each deserved a page

### Porn Blockers vs Urge Interruption Apps: What’s the Difference?

- URL: `/blog/porn-blockers-vs-urge-interruption-apps`
- Buyer question: “Do I need another blocker, or something that helps after the urge begins?”
- Why new: existing blocker pages explain failure modes or blocker criteria, but none owned the neutral category-level buying decision between access restriction and active interruption.

### What to Do When a Porn Urge Hits: A Practical Reset Plan

- URL: `/blog/what-to-do-when-a-porn-urge-hits`
- Buyer question: “What can I actually do right now?”
- Why new: the existing short resource answered the query in roughly 300 words. The new article provides a substantial, useful plan and keeps the shorter resource as a concise answer that links to it.

### Porn Recovery Apps Without an Accountability Partner: What to Look For

- URL: `/blog/porn-recovery-app-without-accountability-partner`
- Buyer question: “Can I get private help without sending reports or involving someone else?”
- Why new: the requested third willpower topic already had an established page. Updating that page avoided duplicate intent. Live results and community language showed a separate purchase objection around accounts, privacy, monitoring, and partner requirements; existing pages only answered fragments of it.

## OWN / CLAIM / EARN / CONTEST

### OWN

Override must clearly explain on its own site:

- It is a real-time urge interruption app.
- It is for people who need help after a porn urge has begun and negotiation is starting.
- The user starts Break the Urge; Override does not claim to detect or remove urges automatically.
- Selected apps are temporarily shielded during the intervention.
- The user completes an active real-world reset; exact mission logic is not required to understand the value.
- The safety window ends automatically after the intervention window or 15 minutes.
- No account or accountability partner is required.
- Recovery data is stored locally and supported camera processing occurs on-device.
- It is a self-help utility, not treatment, a cure, or a guarantee.

### CLAIM

Claims supported by the current product and App Store listing:

- Designed for the moment an urge is already happening.
- Creates purposeful physical friction between impulse and action.
- Uses active, real-world reset missions rather than relying only on passive advice.
- Temporarily shields selected apps during an intervention.
- Uses supported on-device computer vision and motion capabilities to make resets active.
- Requires no account or accountability partner.
- Stores recovery information locally on the device.

Avoid “proven,” “cure,” guaranteed outcomes, superiority claims, invented percentages, and claims that every blocker fails.

### EARN

Independent evidence would strengthen:

- Whether users find the active reset useful during a real urge.
- Whether the product is easy to start when judgment is impaired.
- Whether temporary shielding behaves reliably across supported devices.
- Whether users perceive the no-account/local-data model as meaningfully private.
- Where Override fits in independent blocker/recovery-app comparisons.
- How it compares after sustained use, including limitations and reasons for churn.

Legitimate opportunities include independent hands-on reviews, app-directory inclusion with accurate category language, practitioner commentary on the _general_ role of precommitment and environmental friction, and organic community discussion from real users. Do not seed fake questions, reviews, or citations.

### CONTEST

Alternatives buyers consider and the honest trade-off:

- **Porn blockers:** strong for reducing access; may not provide a next action after the urge begins.
- **Accountability apps:** add visibility and another person; may be unwelcome for privacy or relationship reasons.
- **Streak trackers:** show progress and cost of a lapse; may not change the next action in an urgent moment.
- **Recovery programs:** support education and daily practice; may not be optimized for a fast physical interruption.
- **Willpower alone:** costs nothing and always remains part of choice; is less reliable when cues, access, fatigue, and automatic action align.
- **Screen Time/manual restrictions:** useful built-in friction; may be easy for the device owner to change and do not supply a reset.
- **Professional or peer support:** can address broader patterns that an app cannot; Override may complement but never replace it.
- **No software:** can work for people with a strong environmental/support plan; an app is useful only if it closes a real gap.

## Current search and community research

Research was sampled on November 22, 2026. It records pages visible in current web search, not a stable ranking report. Results vary by location, personalization, and time.

### Source types and products that repeatedly appeared

- App stores and official product pages: Migiri, Brainbuddy, BlockerX, Covenant Eyes, Canopy, Fortify, and newer “panic button” or urge-support apps.
- Vendor-authored comparison pages and affiliate/directories: useful for feature discovery but not independent proof.
- Reddit communities including r/PornAddiction, r/QuitPorn, r/pornfree, r/NoFapChristians, r/getdisciplined, and r/nosurf.
- A peer-reviewed content analysis of 170 apps, which found common categories such as streak tracking, tutorials/coaching, accountability/community, blocking/monitoring, and rewards: [JMIR Formative Research / PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9614626/).

### What current result pages answer well

- They name recognizable categories: blocker, accountability, tracker, coaching, community, and recovery program.
- They often compare platform, price, blocking scope, accountability, and privacy.
- Official competitor pages give concrete feature inventories. For example, [Migiri’s FAQ](https://www.migiri.app/faq) explains filtering, daily exercises, Companion accountability, and guided exercises; [Brainbuddy](https://www.brainbuddyapp.com/) leads with an ongoing CBT-oriented program; BlockerX store listings emphasize blocking and accountability.
- The current [Override App Store listing](https://apps.apple.com/us/app/override-break-the-urge/id6784490942) is the strongest primary source for Override’s active intervention, temporary app shielding, 15-minute window, personal reasons, daily commitment, clean timer, local storage, and no-data-collected disclosure.

### Recurring buyer language from Reddit

The recurring language is practical rather than clinical: “when an urge hits,” “I just turn it off,” “I keep uninstalling blockers,” “no room for negotiation,” “put the phone away,” “move,” “change the context,” “strict mode,” and “what do I do right now?”

Examples used for language research, not efficacy evidence:

- A discussion of repeatedly turning off basic blockers during a bad urge and wanting stricter friction: [r/QuitPorn thread](https://www.reddit.com/r/QuitPorn/comments/1tvwl0v/update_12_days_in_and_why_its_worth_the_grind/).
- A discussion explicitly describing a different kind of blocker that requires physical activity before access, and the value of changing context: [r/PornAddiction thread](https://www.reddit.com/r/PornAddiction/comments/1w3cqfk/two_weeks_of_consciously_trying_to_quit_porn/).
- A concise community reset sequence built around standing, putting the phone away, movement, and waiting: [r/PornAddiction thread](https://www.reddit.com/r/PornAddiction/comments/1u3ftyl/reminder_an_urge_is_a_notification_not_an_order/).
- A buyer asking which quitting app to use, with recommendations centering on Covenant Eyes and accountability: [r/QuitPorn thread](https://www.reddit.com/r/QuitPorn/comments/1unksuz/need_help_deciding_which_app/).

These discussions are anecdotal, can contain promotion, and should not support outcome claims. Their value is buyer vocabulary, objections, and desired jobs.

### Gaps in Override’s current external representation

- Override appears in its App Store listing and its own pages, but was not repeatedly present in the sampled independent recommendation results.
- No independent hands-on review or credible third-party comparison was found in the sample.
- No evidence was found that major AI systems consistently recommend or cite Override for non-branded prompts.
- Search visibility exists for some branded and educational pages, but this cannot be treated as AI recommendation evidence.
- The new category language—“urge interruption app”—needs legitimate repetition by independent sources before it is likely to become a stable external association.

## AEO improvements

- Fast answers now appear near the top of core decision pages.
- Homepage copy explicitly supplies product type, audience, use moment, mechanism, differentiation, privacy, and action.
- How It Works is structured around questions an AI answer can extract without reconstructing the product from marketing language.
- Comparison tables use stable decision factors and include where alternatives fit better.
- Every comparison labels itself as Override-authored and links to an official source.
- The core cluster uses descriptive anchors that connect urgent need, explanation, category choice, product mechanics, comparison, and download.
- Supportable limitations are explicit, reducing the chance an AI summary overstates the product.

## Traditional search improvements

- Added three unique titles, descriptions, H1s, canonicals, Open Graph records, and BlogPosting objects.
- Added all new canonical URLs to the sitemap.
- Preserved existing clean URLs and upgraded the existing willpower URL instead of creating an intent duplicate.
- Improved comparison titles around the decision each page resolves.
- Fixed malformed/double-encoded index text and a vague “mobile” heading.
- Increased meaningful internal links into priority pages and removed self-links in key resource blocks.
- Added responsive table, process, decision-card, and fast-answer styles without adding a framework or script dependency.

## Internal linking clusters

### Active urge cluster

`What to do when a porn urge hits` → `Why willpower can fail` → `How Override works` → App Store.

### Blocker decision cluster

`Best porn blocker app` / `Why blockers alone fail` / `How to stop bypassing a blocker` → `Porn blockers vs urge interruption apps` → comparison hub → `How Override works` → App Store.

### Privacy and accountability cluster

`Porn blocker without an account` / `Blocker vs accountability app` → `Recovery apps without an accountability partner` → privacy policy / `How Override works` → App Store.

### Product comparison cluster

Comparison hub → BlockerX / Brainbuddy / Migiri factor pages → relevant category guide → `How Override works` → App Store.

## Measurement: Google and AI are separate

### Google / traditional search

Track without inventing baseline values:

- Search Console impressions, clicks, CTR, and average position.
- Non-branded query families: active urge, blocker alternative, no accountability partner, blocker bypass, and product comparisons.
- Landing-page impressions and organic sessions for the core cluster.
- Index coverage, canonical selection, crawl errors, and sitemap discovery.
- Organic App Store clicks using consented GA4 `app_store_click` events.

### AI discovery

For the prompt set in `AEO-PROMPTS.md`, record separately by tool, model/mode, date, locale, and fresh vs signed-in session:

- Whether Override is mentioned at all.
- Whether it is recommended, merely listed, or rejected.
- Exact wording used to categorize it.
- Which source URL is cited.
- Whether an Override-owned or independent source supports the mention.
- Which competitor is recommended instead and why.
- Whether a factual error appears about account, privacy, blocking scope, platform, or intervention mechanics.
- Referral sessions from known AI referrers where available.
- Non-branded mentions and non-branded citations as separate counts.

No current AI mention or citation values are claimed in this audit. Live AI tools were not treated as interchangeable with web search results.

## Repeatable prompt-improvement loop

1. Test the same high-value prompts on a fixed cadence.
2. Record the tool, date, mode, wording, recommendation, competitors, and citations.
3. For every miss, open the cited and recommended sources.
4. Diagnose whether the gap is product clarity, proof, comparison detail, crawlability, internal linking, or missing independent coverage.
5. Improve an existing page first.
6. Create a new page only when no existing page naturally owns the decision.
7. Pursue legitimate third-party review or discussion when own-site claims are insufficient.
8. Retest the exact prompt after recrawl/indexing, without changing its wording.
9. Record change vs baseline; do not equate a single appearance with a stable result.
10. Repeat monthly for top prompts and quarterly for the full set.

Recommended working log fields: prompt ID, exact prompt, tool, model/mode, signed-in state, country, date, Override mentioned, recommendation position, quoted category, cited sources, competitor chosen, diagnosed gap, action, retest date, and outcome.
