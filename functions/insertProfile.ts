"use server";

import { TablesInsert } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";

export async function insertProfile(profile: TablesInsert<"profiles">) {
  const supabase = createClient();

  const response = await supabase.from("profiles").insert(profile);

  if (response.error) {
    return false;
  }

  return true;
}
