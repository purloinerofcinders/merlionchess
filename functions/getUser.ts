"use server";

import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createClient();

  const response = await supabase.auth.getUser()
  
  return response.data.user;
}