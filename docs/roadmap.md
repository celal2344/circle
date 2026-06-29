# Circle Roadmap

## Phase 1 - Foundation

Outcome: the project has stable context and an implementation-ready shape.

Core work:

- Maintain `CONTEXT.md` as glossary-only domain language.
- Keep product requirements in `docs/prd.md`.
- Maintain MVP scope, architecture, roadmap, build log, and ADRs under `docs/`.
- Initialize repo and monorepo tooling when moving from docs to code.
- Establish `shared/` as the domain type source.
- Establish Turborepo task orchestration and package boundaries.

Acceptance:

- A future agent can understand product scope, terms, architecture, and decisions from docs alone.
- ADRs explain the initial monorepo, Supabase, and shared type decisions.
- Engineering conventions explain web feature structure, UI patterns, and git workflow.

## Phase 2 - Auth And Profiles

Outcome: every role can enter the system with correct access rules.

Core work:

- Email OTP auth.
- Role onboarding.
- İşletme invite flow.
- Organizer approval flow.
- Sanatçı and Saha Çalışanı profile setup.
- Primary and secondary sub-role selection.
- Automated Log and Manual Log profile surfaces.

Acceptance:

- İşletme users can only enter through pilot access.
- Organizers cannot use marketplace actions before approval.
- Sanatçı and Saha Çalışanı activate after email OTP.
- Profile history distinguishes Circle-verified and self-reported entries.

## Phase 3 - Booking Workflow

Outcome: one complete pilot Event can move from Slot to confirmed Event.

Core work:

- İşletme Slot creation.
- Organizer Slot discovery.
- Event Idea creation.
- Pre-Flow matching.
- Applications.
- Roster selection.
- Seed submission.
- İşletme Seed review and approval.
- Same-date conflict removal.

Acceptance:

- An Organizer can fill a roster and submit a Seed.
- An İşletme can approve one Seed for a Slot.
- Confirmed roster members are blocked for the full date.
- Competing same-date applications are removed after confirmation.

## Phase 4 - Operations And Trust

Outcome: confirmed Events can be coordinated, cancelled, completed, and reviewed.

Core work:

- Next.js Admin panel.
- Push and in-app notifications.
- WhatsApp group link on confirmed Events.
- Organizer/Admin cancellation.
- Event closure.
- Positive/negative reviews.
- Organizer-Level Blocks.
- Warning history.
- Temas tracking.

Acceptance:

- Confirmed Events expose WhatsApp coordination link and roster state.
- Cancelled Events release roster schedules.
- Completed Events update Automated Logs.
- Negative/block history is visible to future Organizers as count, most recent date, and issuing Organizer.

Related: [[docs/mvp-scope]], [[docs/architecture]], [[docs/build-log]]
