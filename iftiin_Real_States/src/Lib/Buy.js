import toast from "react-hot-toast"
import supabase from "./supabse"

export const buyerData = async(currentBuyer)=> {
    const {data, error} = await supabase
    .from('BuyerData')
    .insert([
       {
        image: currentBuyer.image,
        title: currentBuyer.title,
        price: currentBuyer.price,
        bedrooms: currentBuyer.bedrooms,
        bathrooms: currentBuyer.bathrooms,
        auther_buyer_id: currentBuyer.auther_buyer_id,
        area: currentBuyer.area,
        // property_id: currentBuyer.property_id
       }
    ])
    .select()
    .single()

    if(error) {
        toast.error('error happened during the process of buying', error);
        throw error;
    }
    toast.success('congratulation you buy your first house', {position: "top-right"});
    return data;
}

export const getBuyData = async ()=> {
    const {data, error} = await supabase
    .from('BuyerData')
    .select('*')
    .order('created_at', {ascending: false })
    .limit(3);

    if(error) {
        toast.error('Error fetching Buy Data');
        throw error
    }
    return data;
}