import { createClient } from "@supabase/supabase-js";

export function createSupabaseMobileClient() {
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !publishableKey) {
    throw new Error("Missing Supabase mobile environment variables.");
  }

  return createClient(supabaseUrl, publishableKey);
}
