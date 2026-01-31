import supabase from "./supabse";

export const uploadLocalImageToBucket = async (localPath, fileName) => {
  const response = await fetch(localPath);
  const bob = await response.blob();

  const { data, error } = await supabase.storage
  .from("buy_houses_image")
  .upload(fileName, bob, {
    cacheControl: "3600",
      upsert: true,
  })

  if(error) {
     console.error("Upload error:", error);
    return null;
  }

  const publicUrl = supabase.storage
  .from('buy_houses_image')
  .getPublicUrl(fileName).data.publicUrl
  return publicUrl
};
