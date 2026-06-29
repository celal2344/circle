# Monorepo Shape

Circle will use a single monorepo with `docs/`, `mobile/`, `web/`, `supabase/`, and `shared/`. This keeps the Expo app, Next.js Admin panel, Supabase backend assets, shared schemas, and project context in one place while the product is changing quickly.

The alternative was separate projects for mobile, admin, and backend. That would reduce initial repository complexity but would make shared domain types, workflow changes, and documentation harder to keep aligned during MVP development.
