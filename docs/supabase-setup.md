# Supabase Setup

## Project

- Project URL: `https://dklkhoryoplyrzoepbxs.supabase.co`
- Project ref: `dklkhoryoplyrzoepbxs`

## Local Environment

Copy the example files before running the apps:

- `web/.env.example` -> `web/.env.local`
- `mobile/.env.example` -> `mobile/.env.local`
- `supabase/.env.example` -> `supabase/.env.local`

Do not commit `.env.local` files.

The database password and connection string are local secrets. Keep them in ignored local files or a password manager, not in tracked docs.

## MCP Status

The Supabase MCP must be authenticated against project ref `dklkhoryoplyrzoepbxs` before using it for schema inspection, advisors, migrations, or publishable key lookup.

During initial setup, the MCP returned a different project URL:

- `https://rlrchmplublpckfqcqcm.supabase.co`

Do not apply migrations through MCP until the MCP project target matches `dklkhoryoplyrzoepbxs`.

## Next Checks

After MCP is pointed at the correct project:

1. Fetch the project URL from MCP and confirm it matches this note.
2. Fetch the active publishable key from MCP.
3. List existing public tables.
4. Run security and performance advisors.
5. Only then create the first auth/profile migration.

Related: [[docs/architecture]], [[docs/roadmap]], [[docs/conventions]]
