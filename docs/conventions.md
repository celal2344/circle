# Circle Engineering Conventions

## Monorepo

- Use Turborepo for repo-wide tasks.
- Root `package.json` scripts should delegate to `turbo run <task>`.
- Put task implementation in each workspace package when possible.
- Do not use root scripts that manually `cd` into workspaces.
- Do not keep shared source inside app folders.
- Use package-local `.env` files rather than a root `.env`.

## Web App Structure

- Keep `web/app/**/page.tsx` thin.
- Route files should delegate to feature components.
- Do not put large UI components, CRUD panels, table definitions, or form logic in route files.
- Do not add feature components directly under route folders.
- Put feature-owned UI under `web/features/<feature>/`.
- Inside a feature, use `components/`, `constants.ts`, `utils.ts`, and `types.ts` only when needed.
- Keep components focused and short.
- Split large screens into page shells, panels, tables, forms, and summary components.
- Separate constants and utility functions from components.
- Reuse existing constants and helpers before adding new ones.

## UI Boundaries

- Shared generic shadcn UI belongs in `web/components/ui/`.
- Shared app-level components belong in `web/components/`.
- Shared data-table infrastructure belongs in `web/components/data/`.
- CRUD tables should use the shared TanStack/shadcn wrapper at `web/components/data/data-table.tsx`.
- CRUD forms should use React Hook Form, shadcn Field components, and Zod schemas from `shared/domain`.
- Product copy and validation messages can be Turkish literals for now.
- Do not introduce translation/i18n infrastructure until localization becomes a real requirement.

## Shared Domain

- Keep cross-app models, schemas, constants, and app-facing domain types in `shared/`.
- Generate Supabase database types into `shared/db`.
- Put curated app-facing Zod schemas and inferred types in `shared/domain`.
- Apps must not create duplicate local domain shapes.
- Raw database row types should not become the default app contract.

## Git Workflow

- Commit consistently as work progresses.
- Prefer small commits after each coherent, verified change.
- Push commits regularly when the remote is configured and network access is available.
- Before every commit, run relevant checks for the touched area.
- Before every commit, inspect `git status` and the staged diff.
- Do not include unrelated user changes in a commit.
- If unrelated files are already modified, leave them unstaged.
- Never commit secrets, local environment files, generated reports, local databases, dependency folders, or build artifacts.

Related: [[docs/architecture]], [[docs/adr/0004-turborepo-build-system]], [[docs/adr/0005-web-feature-architecture]]
