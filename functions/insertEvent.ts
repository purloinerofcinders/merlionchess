"use server";

import { createClient } from "@/utils/supabase/server";
import { TablesInsert } from "@/types/supabase";

export async function insertEvent(event: TablesInsert<"events">) {
  const supabase = createClient();

  const response = await supabase.from("events").insert(event).select().single();
console.log(response);
  return response.data;
}