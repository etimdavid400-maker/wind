import { supabase } from "../supabaseClient";

// Upload image to Supabase storage
export const uploadImage = async (file) => {
  if (!file) return null;

  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, file);

  if (error) {
    console.error("Image upload error:", error);
    throw error;
  }

  // Get public URL
  const { publicUrl, error: urlError } = supabase.storage
    .from("blog-images")
    .getPublicUrl(fileName);

  if (urlError) {
    console.error("Error getting public URL:", urlError);
    throw urlError;
  }

  return publicUrl;
};
