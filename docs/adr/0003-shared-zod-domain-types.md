# Shared Zod Domain Types

Circle will treat `shared/` as the only source for domain schemas and TypeScript domain types. Supabase database types will be generated into `shared/db`, while app-facing Zod schemas and inferred types will live in `shared/domain`.

The key trade-off is discipline over convenience: mobile and web apps must not create parallel local domain types. This keeps role, booking, review, and trust concepts aligned as the product changes, while still preventing raw database row shapes from becoming the default app contract.
