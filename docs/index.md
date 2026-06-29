# Circle Index

Circle is a mobile-first event and entertainment marketplace for Istanbul's early pilot market.

## Project Context

- [[docs/prd|Product Requirements]]
- [[docs/mvp-scope|MVP Scope]]
- [[docs/architecture|Architecture]]
- [[docs/roadmap|Roadmap]]
- [[docs/build-log|Build Log]]
- [[docs/skills|Agent Skills]]
- [[CONTEXT|Domain Glossary]]

## Decisions

- [[docs/adr/0001-monorepo-shape|ADR 0001 - Monorepo Shape]]
- [[docs/adr/0002-supabase-backend-first|ADR 0002 - Supabase Backend First]]
- [[docs/adr/0003-shared-zod-domain-types|ADR 0003 - Shared Zod Domain Types]]
- [[docs/adr/0004-turborepo-build-system|ADR 0004 - Turborepo Build System]]
- [[docs/adr/0005-web-feature-architecture|ADR 0005 - Web Feature Architecture]]
- [[docs/conventions|Engineering Conventions]]

## Current Direction

- First implementation pass is docs-first.
- MVP proves the booking loop, not a full social network.
- Code will later be organized as `docs/`, `mobile/`, `web/`, `supabase/`, and `shared/`.
- Turborepo will orchestrate monorepo tasks.
- Supabase is the initial backend boundary.
- `shared/` owns generated database types, Zod schemas, and inferred TypeScript domain types.
- The product UI can use Turkish copy directly for now; no translation system is required in the MVP.

Related: [[docs/prd]], [[docs/mvp-scope]], [[docs/architecture]], [[docs/roadmap]], [[docs/conventions]], [[docs/skills]], [[CONTEXT]]
