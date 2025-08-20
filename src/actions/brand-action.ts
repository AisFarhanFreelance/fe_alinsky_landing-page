"use server";

import { createClient } from "@/lib/supabase/server";

interface AddBrandFormData {
  brand_name: string;
  email: string;
  phone_number: string;
  social_url: string;
}

export async function addBrands({
  brand_name,
  email,
  phone_number,
  social_url,
}: AddBrandFormData) {
  const supabase = await createClient();

  const data = {
    brand_name,
    email,
    phone_number,
    social_url,
  };
  const { error } = await supabase.from("brands").insert(data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Brand added successfully",
  };
}
