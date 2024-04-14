"use server";

import { createClient } from "@/utils/supabase/server"
import { headers } from "next/headers";

export async function signinWithEmailSupabase(email: string) {
  const supabase = createClient();
  const origin = headers().get("origin");
  
  const response = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  console.log(response);
}