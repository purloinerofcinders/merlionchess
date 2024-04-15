"use server";

import { createClient } from "@/utils/supabase/server";

export async function insertProfile(name: string) {
  const supabase = createClient();

  const response = await supabase.from("profiles").insert({ name: name });

  if (response.error) {
    return false;
  }

  return true;
}
