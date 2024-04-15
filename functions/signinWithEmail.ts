"use server";

import { createClient } from "@/utils/supabase/server"
import { headers } from "next/headers";

/**
 * 
 * @param email 
 * @returns true if success, false if error
 */
export async function signinWithEmail(email: string) {
  const supabase = createClient();
  const origin = headers().get("origin");
  
  const response = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (response.error) {
    return false;
  }

  return true;
}