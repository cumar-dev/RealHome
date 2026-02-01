import supabase from "./supabse";

export const addNewProperty = async (sellData) => {
  const { data, error } = await supabase
    .from("SellData")
    .insert([
      {
        title: sellData.title,
        description: sellData.description,
        price: sellData.price,
        bedrooms: sellData.bedrooms,
        bathrooms: sellData.bathrooms,
        area: sellData.area,
        type: sellData.type,
        user_id: sellData.user_id,
        image: sellData.image,
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getSellData = async () => {
  const { data, error } = await supabase
    .from("SellData")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase sell data error:", error);
    throw error;
  }

  console.log("Sell data fetched:", data);
  return data || [];
};
