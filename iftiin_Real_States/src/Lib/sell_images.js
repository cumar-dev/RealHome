import supabase from "./supabse";

export const uploadImageToBucket = async (file, userId) => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${userId}-${Date.now()}.${fileExt}`;
  const filePath = `sell/${fileName}`;

  const { error } = await supabase.storage
    .from("sell_images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from("sell_images")
    .getPublicUrl(filePath);

  return data.publicUrl;
};
