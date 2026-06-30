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

## 2026-06-29 - Monorepo Scaffold

Created the initial development branch and scaffolded the npm workspace/Turborepo monorepo:

- `web/` Next.js Admin shell with thin `app/page.tsx` delegating to `web/features/home`.
- `mobile/` Expo shell with Turkish MVP placeholder copy.
- `shared/` package with initial Zod domain schemas and database type placeholder.
- `supabase/` workspace with config, migrations/functions/seed placeholders, and a scaffold check script.
- Root workspace scripts delegate to `turbo run`.

Verified:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Related: [[docs/architecture]], [[docs/conventions]], [[docs/adr/0004-turborepo-build-system]]

## 2026-06-30 - Supabase Project Config

Recorded the target Supabase project ref and URL without committing secrets.

- Project ref: `dklkhoryoplyrzoepbxs`
- Project URL: `https://dklkhoryoplyrzoepbxs.supabase.co`
- Added env examples for `web/`, `mobile/`, and `supabase/`.
- Added Supabase client helpers for web and mobile.
- Added [[docs/supabase-setup]] with MCP verification notes.

Blocked before migrations:

- Resolved: Supabase MCP now confirms project ref `dklkhoryoplyrzoepbxs`.
- Public schema has no tables and no migrations yet.
- Security and performance advisors are clean before the first schema migration.
