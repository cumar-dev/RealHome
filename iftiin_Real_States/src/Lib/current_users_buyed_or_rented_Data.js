import toast from "react-hot-toast"
import supabase from "./supabse"

export const usersBuyingOrRentingData = async (currentBuyerOrRenter) => {
const {data, error} = await supabase
.from('current_users_form_buyed_or_rented_Data')
.insert([
    {
        full_name: currentBuyerOrRenter.full_name,
        Email: currentBuyerOrRenter.Email,
        option: currentBuyerOrRenter.option,
        message: currentBuyerOrRenter.message,
        current_users_id: currentBuyerOrRenter.current_users_id
    }
])
.select()
.single()

if(error) {
    toast.error('error happened during the process');
    throw error
}
return data;
}