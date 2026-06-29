# Turborepo Build System

Circle will use Turborepo to orchestrate builds, checks, tests, and development tasks across `mobile/`, `web/`, `supabase/`, and `shared/`.

The key rule is that workspace packages own their scripts, while the root `package.json` delegates through `turbo run <task>`. This preserves dependency-aware execution, caching, and future CI behavior instead of relying on hand-written root scripts that manually traverse folders.
