import { createClient } from "@/utils/supabase/server";

export async function getProfilesByUser(userID: string) {
  const supabase = createClient();

  const response = await supabase
    .from("profiles")
    .select()
    .eq("owner_id", userID);

  return response.data ?? [];
}
