"use server";

import { createClient } from "@/utils/supabase/server";

export async function getPublicEvents(userID?: string) {
  const supabase = createClient();

  const response = userID ? await supabase.from("events").select().eq('private', false).neq('created_by', userID) : await supabase.from("events").select().eq('private', false);

  return response.data ?? [];
}