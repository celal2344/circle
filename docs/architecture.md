# Circle Architecture

## Repository Shape

The planned monorepo shape is:

```text
docs/
mobile/
web/
api/
shared/
```

`docs/` holds Obsidian-compatible project context, ADRs, roadmap, and build log.

`mobile/` will hold the Expo application for all non-admin roles. It uses role-based tabs after onboarding.

`web/` will hold the Next.js Admin panel for Organizer approvals, İşletme pilot access, operational visibility, and trust review.

`api/` is the Supabase backend boundary. It should contain migrations, Edge Functions, seed scripts, backend docs, and integration notes. It is not a custom Node API at MVP.

`shared/` is the only source for domain schemas and TypeScript domain types.

## Stack

- Expo for the mobile app.
- Next.js App Router for the Admin web app.
- Supabase for Auth, Postgres, RLS, Edge Functions/RPC, generated DB types, and backend operations.
- Zod for app-facing domain schemas.
- Turborepo-style package tasks when code is scaffolded.

## Auth

MVP auth uses email OTP.

SMS OTP is deferred until Circle is ready to pay for phone verification and SMS abuse controls.

Authorization must not rely on user-editable metadata. Role and approval state should be stored in controlled app/database records and enforced by RLS plus server-authoritative transitions.

## Shared Types

All domain types live in `shared/`.

The intended layout is:

```text
shared/
  db/
  domain/
```

`shared/db` contains generated Supabase database types.

`shared/domain` contains curated Zod schemas and inferred TypeScript types for app-facing contracts.

Mobile and web apps import domain types from `shared/` and must not create parallel local domain types.

## Data Model

The conceptual model keeps separate lifecycle concepts:

- User Account.
- Profile.
- Role.
- Worker Sub-Role.
- İşletme.
- Organizer.
- Slot.
- Event Idea.
- Application.
- Roster Position.
- Seed.
- Event.
- Review.
- Organizer-Level Block.
- Warning History.
- Automated Log.
- Manual Log.
- Temas.
- Notification.

Separate concepts are added only when they have distinct identity, permissions, lifecycle, or audit needs.

## Server-Authoritative Operations

Critical transitions should be handled by Supabase RPC/Edge Functions or equivalent server-authoritative paths:

- İşletme invite/access.
- Organizer approval.
- Seed submission.
- İşletme Seed approval.
- Event confirmation.
- Same-date conflict removal.
- Event cancellation.
- Event closure.
- Reviews.
- Blocks.

Simple reads and low-risk writes can use Supabase clients directly, wrapped by shared query/mutation helpers when rules are reused.

## Security Baseline

- Enable RLS on exposed Supabase tables.
- Keep service-role credentials out of mobile and web clients.
- Treat warning history as private authenticated data.
- Use pilot-private visibility by default.
- Re-check current Supabase docs before implementation.

Related: [[docs/adr/0001-monorepo-shape]], [[docs/adr/0002-supabase-backend-first]], [[docs/adr/0003-shared-zod-domain-types]], [[docs/mvp-scope]]
