# Web Feature Architecture

The Next.js Admin app will keep route files thin and place feature-owned UI under `web/features/<feature>/`. Route folders under `web/app/` are for routing files only, while shared generic UI belongs in `web/components/ui/` and shared app-level components belong in `web/components/`.

Admin CRUD surfaces will use shared infrastructure rather than each feature inventing its own table and form patterns: TanStack/shadcn tables through `web/components/data/data-table.tsx`, React Hook Form with shadcn Field components for forms, and Zod schemas from `shared/domain`. Turkish copy and validation messages can be written directly for the MVP; no translation layer is introduced until localization is needed.
