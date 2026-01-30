import toast from "react-hot-toast";
import supabase from "./supabse";
export const gettingNewUserInfo = async (newUserContactInformation) => {
//   console.log("new contact form registered", gettingNewUserInfo);
  const { data, error } = await supabase
    .from("Contact_Form_Users")
    .insert([
      {
        Full_name: newUserContactInformation.Full_name,
        Email: newUserContactInformation.Email,
        Message: newUserContactInformation.Message,
        Contact_id: newUserContactInformation.Contact_id,
      },
    ])
    .select()
    .single();

  if (error) {
    toast.error("error happened during registering new contact", error);
    throw error;
  }
  return data;
};
