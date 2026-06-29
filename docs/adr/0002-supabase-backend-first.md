# Supabase Backend First

Circle will start with Supabase as the backend boundary. The `supabase/` folder will hold migrations, Edge Functions/RPC, seed scripts, generated backend assets, and backend notes rather than a custom Node server.

This is enough for the MVP booking loop and avoids adding deployment, auth, and data-consistency work before there is a real need. A custom backend can be added later if Circle needs complex background jobs, payments, heavy matching/search, legal audit workflows, high-volume chat, custom rate limiting, or integrations that do not fit Supabase Edge Functions comfortably.
