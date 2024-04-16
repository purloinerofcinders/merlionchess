"use server";

import { createClient } from "@/utils/supabase/server";

export async function getPublicEvents() {
  const supabase = createClient();

  const response = await supabase.from("events").select().eq('private', false);

  return response.data ?? [];
}