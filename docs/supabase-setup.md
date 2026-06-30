# Supabase Setup

## Project

- Project URL: `https://dklkhoryoplyrzoepbxs.supabase.co`
- Project ref: `dklkhoryoplyrzoepbxs`
- Publishable key: `sb_publishable_qrzWCB4VfNR44oeE3ytFyA_gMs1-kho`

## Local Environment

Copy the example files before running the apps:

- `web/.env.example` -> `web/.env.local`
- `mobile/.env.example` -> `mobile/.env.local`
- `supabase/.env.example` -> `supabase/.env.local`

Do not commit `.env.local` files.

The database password and connection string are local secrets. Keep them in ignored local files or a password manager, not in tracked docs.

## MCP Status

MCP is authenticated against project ref `dklkhoryoplyrzoepbxs`.

Verified on 2026-06-30:

- MCP project URL matches `https://dklkhoryoplyrzoepbxs.supabase.co`.
- MCP returned an active modern publishable key.
- Public schema has no tables yet.
- No migrations are applied yet.
- Security advisors are clean.
- Performance advisors are clean.

During initial setup, the MCP returned a different project URL, but that is now resolved.

## Next Checks

Before every schema change:

1. List existing public tables.
2. Apply changes as migrations, not one-off remote edits.
3. Run security and performance advisors.
4. Confirm all exposed tables have RLS enabled.

Related: [[docs/architecture]], [[docs/roadmap]], [[docs/conventions]]
