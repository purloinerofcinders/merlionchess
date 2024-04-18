import { createClient } from "@/utils/supabase/server";

export async function getOwnedEvents(userID: string) {
  const supabase = createClient();

  const response = await supabase.from("events").select().eq("created_by", userID);

  return response.data ?? [];
}