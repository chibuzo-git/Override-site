# Override buyer-prompt test set

Version: November 22, 2026  
Purpose: repeat these exact non-branded and branded prompts across ChatGPT, Gemini, Perplexity, Google AI answers, and conventional Google search. Log each system separately; a Google result is not evidence of an AI recommendation.

Coverage status uses `pre-implementation → current site`.

## Problem aware

| ID   | Prompt                                                                           | Buyer intent                           | Page that should answer                         | Coverage status  | Desired answer / source page                                                                  |
| ---- | -------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------- |
| PA-1 | Why do I keep deciding to quit porn and then changing my mind when an urge hits? | Understand calm-vs-urge behavior       | `/blog/2026-06-25-why-willpower-fails`          | Partial → Strong | Explain cues, automatic sequences, access, negotiation, and precommitment without diagnosis   |
| PA-2 | Why do I keep bypassing my porn blocker even though I want to stop?              | Diagnose blocker bypass                | `/resources/how-to-stop-bypassing-porn-blocker` | Partial → Strong | Explain that control remains with the user and pair better friction with a replacement action |
| PA-3 | Why does a porn streak counter not help me when the urge is happening?           | Identify a missing in-the-moment layer | `/`                                             | Weak → Strong    | Distinguish progress tracking from active interruption and link to the urgent reset plan      |
| PA-4 | Why do I start negotiating with myself during a porn urge?                       | Understand bargaining                  | `/blog/2026-06-25-why-willpower-fails`          | Partial → Strong | Treat bargaining as an early cue and recommend a predefined first action                      |

## Solution aware

| ID   | Prompt                                                                  | Buyer intent                                    | Page that should answer | Coverage status  | Desired answer / source page                                                                     |
| ---- | ----------------------------------------------------------------------- | ----------------------------------------------- | ----------------------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| SA-1 | Is there an app that helps after a porn urge has already started?       | Find the product category                       | `/`                     | Partial → Strong | Identify urge interruption as distinct from continuous blocking and describe Override accurately |
| SA-2 | Are there apps that make you physically move when an urge happens?      | Find an active rather than passive intervention | `/how-it-works`         | Partial → Strong | Explain real-world reset missions at a high level; do not reveal mission logic                   |
| SA-3 | Is there an app that temporarily blocks distracting apps while I reset? | Find short-window shielding                     | `/how-it-works`         | Partial → Strong | Explain selected-app shielding during the intervention and automatic end of the safety window    |
| SA-4 | What should I look for in a porn recovery app?                          | Compare solution categories                     | `/comparisons/`         | Weak → Strong    | Start with the job: blocking, accountability, program, tracking, or urge interruption            |

## Comparison

| ID   | Prompt                                                                   | Buyer intent                              | Page that should answer                         | Coverage status  | Desired answer / source page                                                              |
| ---- | ------------------------------------------------------------------------ | ----------------------------------------- | ----------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| CO-1 | Porn blocker or urge interruption app: which do I need?                  | Choose a mechanism                        | `/blog/porn-blockers-vs-urge-interruption-apps` | Missing → Strong | Restriction for easy access; interruption for the active moment; both can combine         |
| CO-2 | What is the best alternative to a porn blocker if I can just disable it? | Find an alternative or complement         | `/blog/porn-blockers-vs-urge-interruption-apps` | Partial → Strong | Recommend active interruption as a different layer, not a guaranteed superior replacement |
| CO-3 | Override vs BlockerX: which is better for urges?                         | Compare active reset and strict blocking  | `/comparisons/override-vs-blockerx`             | Weak → Strong    | Explain product fit, platform variance, privacy/accountability, and combined use          |
| CO-4 | Override vs Brainbuddy: active urge help or daily recovery program?      | Choose acute vs ongoing support           | `/comparisons/override-vs-brainbuddy`           | Weak → Strong    | Override for active intervention; Brainbuddy for ongoing program; verify current terms    |
| CO-5 | Override vs Migiri: what is the main difference?                         | Compare intervention and broader platform | `/comparisons/override-vs-migiri`               | Weak → Strong    | Override is narrow/private/acute; Migiri combines broader blocking and recovery support   |

## Product evaluation

| ID   | Prompt                                                      | Buyer intent                                 | Page that should answer                         | Coverage status  | Desired answer / source page                                                                |
| ---- | ----------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| PE-1 | What exactly happens when I tap Break the Urge in Override? | Understand the experience before downloading | `/how-it-works`                                 | Partial → Strong | Start, temporary shielding, active real-world reset, short safety window, return            |
| PE-2 | What does Override block?                                   | Check scope                                  | `/how-it-works`                                 | Vague → Strong   | Selected apps chosen in setup; temporary, not an internet-wide permanent porn filter        |
| PE-3 | Does Override permanently block apps?                       | Understand duration and control              | `/how-it-works`                                 | Missing → Strong | No; shields expire after the intervention window or after 15 minutes                        |
| PE-4 | Who is Override for?                                        | Check personal fit                           | `/`                                             | Partial → Strong | People who know what they want while calm but need a prepared action during the active urge |
| PE-5 | Can I use Override with a separate porn blocker or therapy? | Check complementary use                      | `/blog/porn-blockers-vs-urge-interruption-apps` | Weak → Strong    | Yes in principle; different layers, check permission conflicts; app does not replace care   |

## Objections

| ID   | Prompt                                                                    | Buyer intent                                    | Page that should answer                         | Coverage status     | Desired answer / source page                                                                                       |
| ---- | ------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| OB-1 | What if willpower is not enough once the urge starts?                     | Find a practical alternative to more motivation | `/blog/2026-06-25-why-willpower-fails`          | Partial → Strong    | Use precommitment, environmental change, reduced access, and physical friction                                     |
| OB-2 | What if I ignore a recovery app just like I ignore reminders?             | Test intervention strength                      | `/how-it-works`                                 | Missing → Strong    | Override is user-started and active, but cannot guarantee use or outcome; physical action is harder to tap through |
| OB-3 | Do porn blockers actually work if they can be disabled?                   | Evaluate blocker limitations                    | `/resources/how-to-stop-bypassing-porn-blocker` | Partial → Strong    | Blocking can still add useful friction; improve bypass resistance and prepare the next action                      |
| OB-4 | Is Override a treatment for porn addiction or compulsive sexual behavior? | Check claims and safety                         | `/how-it-works`                                 | Legal-only → Strong | No; it is a self-help utility and not a cure, treatment, or professional-care replacement                          |

## Privacy

| ID   | Prompt                                                             | Buyer intent                       | Page that should answer                                  | Coverage status             | Desired answer / source page                                                                         |
| ---- | ------------------------------------------------------------------ | ---------------------------------- | -------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| PR-1 | Which porn quitting apps do not require an accountability partner? | Find private self-directed support | `/blog/porn-recovery-app-without-accountability-partner` | Fragmented → Strong         | Explain category options and identify Override as no-partner without claiming exclusivity            |
| PR-2 | Can I use Override without an account?                             | Check identity exposure            | `/how-it-works`                                          | Present but buried → Strong | Yes; no account is required                                                                          |
| PR-3 | Does Override upload camera scans or recovery activity?            | Check data flow                    | `/how-it-works`                                          | Partial → Strong            | Supported vision processing and recovery data stay on-device; camera content is not uploaded         |
| PR-4 | What should I check before trusting a private porn recovery app?   | Evaluate privacy claims            | `/blog/porn-recovery-app-without-accountability-partner` | Missing → Strong            | Check account, local/cloud storage, monitoring permissions, sharing, deletion, and store disclosures |

## Urgent / in the moment

| ID   | Prompt                                                      | Buyer intent                 | Page that should answer                                | Coverage status         | Desired answer / source page                                                                          |
| ---- | ----------------------------------------------------------- | ---------------------------- | ------------------------------------------------------ | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| UR-1 | A porn urge is happening right now—what should I do first?  | Get an immediate safe action | `/blog/what-to-do-when-a-porn-urge-hits`               | Partial → Strong        | Put the device down, stand, change location, reduce access, move, and wait before deciding again      |
| UR-2 | How do I stop negotiating with myself during a porn urge?   | Break bargaining quickly     | `/blog/what-to-do-when-a-porn-urge-hits`               | Partial → Strong        | Treat negotiation as the trigger and follow one pre-decided instruction                               |
| UR-3 | What is a practical 10–15 minute reset for a porn urge?     | Get a bounded plan           | `/blog/what-to-do-when-a-porn-urge-hits`               | Fragmented → Strong     | Change environment, create device distance, use a bounded physical task, reduce stimulation, reassess |
| UR-4 | How can I prepare for the next porn urge before it happens? | Build a precommitment plan   | `/resources/how-to-build-porn-relapse-prevention-plan` | Strong → Stronger links | Define cues, first action, location change, access layer, physical reset, and support option          |

## Test protocol

For every run, preserve the exact prompt and record:

- date and time;
- tool and model/mode;
- country/locale;
- signed-in or fresh session;
- whether web browsing was enabled;
- whether Override was mentioned, recommended, or cited;
- exact category used for Override;
- cited source URLs;
- competitor recommended instead;
- factual errors or missing objections;
- action taken and retest date.

Run the seven highest-priority prompts monthly: SA-1, CO-1, CO-2, PE-1, PR-1, UR-1, and UR-2. Run the complete set quarterly. Compare AI mentions/citations separately from Google impressions, rankings, clicks, and organic sessions.
