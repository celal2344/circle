# Circle Build Log

## 2026-06-29

Initialized the docs-first project context.

Decisions captured:

- The project folder is the Obsidian vault.
- The current `context.md` PRD should be split into project docs.
- Root `CONTEXT.md` is reserved for domain glossary language only.
- MVP proves the Istanbul booking loop.
- İşletme accounts are invite-only for the pilot.
- Organizers self-register but need Admin approval.
- Sanatçı and Saha Çalışanı activate after email OTP.
- Email OTP replaces SMS OTP for the MVP.
- WhatsApp handles Event coordination in v1.
- Pre-Flow is the only v1 feed.
- Supabase is the backend boundary for the MVP.
- `shared/` owns generated DB types, Zod schemas, and inferred domain types.
- `main` is reserved for Vercel/Supabase-connected deployment state.
- Day-to-day development continues on `dev`.

Next actions:

- Scaffold the repo only after the docs pack is accepted.
- Initialize git and monorepo tooling when moving to implementation.
- Create and push the `dev` branch from the latest `main`.
- Re-check Supabase docs and pricing before building auth/schema.

Related: [[docs/index]], [[docs/roadmap]], [[docs/architecture]]
