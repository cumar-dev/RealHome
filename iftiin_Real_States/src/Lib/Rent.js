import toast from "react-hot-toast";
import supabase from "./supabse";

export const rentData = async (currentRenter) => {
  const { data, error } = await supabase
    .from("RentData")
    .insert([
      {
        image: currentRenter.image,
        title: currentRenter.title,
        price: currentRenter.price,
        bedrooms: currentRenter.bedrooms,
        bathrooms: currentRenter.bathrooms,
        area: currentRenter.area,
        current_id: currentRenter.current_id,
      },
    ])
    .select()
    .single();

  if (error) {
    toast.error("error happened during the renting..", {
      position: "top-right",
    });
    throw error;
  }
  toast.success("processing of storing renting be successfull", {
    position: "top-right",
  });
  return data;
};

export const getRentData = async () => {
  const { data, error } = await supabase
    .from("RentData")
    .select("*")
    .limit(3)
    .order("created_at", { ascending: false });

  if (error) {
    toast.error("Error fetching Buy Data");
    throw error;
  }
  return data;
};
