import supabase from "./supabse";
import toast from "react-hot-toast";
export async function getStarted(username = "", email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });
   if (error) {
    toast.error(error.message);
    return null; 
  }
  console.log("auth singUp be successfull", data);
  if (data?.user) {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session) {
      console.log("no session gets", sessionData);
      return data;
    }
    const getUsername = username || email.split("@")[0];

    const { data: profileData, error: profileError } = await supabase
      .from("users")
      .insert({
        id: data.user.id,
        username: getUsername,
      })
      .select()
      .single();

    if (profileError) {
      toast.error("profile creation error", profileError.message);
    } else {
      toast.success("profile created successfully", profileData);
    }
  }
  return data;
}

export async function signIn(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
  email: email,
  password: password
})

console.log('user info get', data);
if(data?.user) {
  try {
    const profile = await getUserProfile(data.user.id)
    console.log('user profile get during the signIn', profile);
    // return { user: data.user, profile };
  } catch (error) {
    toast.error('profile not get during sigIn')
    console.error('error exsists:', error.message);
  }
}
}

export async function getUserProfile(userId) {
const {data:sessionData} = await supabase.auth.getSession();
console.log('session get during', sessionData);
const {data, error} = await supabase
.from('users')
.select('*')
.eq('id', userId)
.single()

if(error && error.code === "PGRST116") {
  console.log('user Profile not found', userId);
  const {data:userData} = await supabase.auth.getUser();
  const email = userData?.user?.email;
  console.log('user found', email);
  const displayUserName = email? email.split('@')[0] : `user${Date.now()}`;
  const {data:newProfile, error:profileError} = await supabase
  .from('users')
  .insert({
    id: userId,
    username: displayUserName
  })
  .select()
  .single()

  if(profileError) {
    console.error('profile error exsists', profileError);
    throw profileError;
  }else {
    console.log('profile created succesfully', newProfile);
    toast.success('profile created successfully', newProfile);
  }
  return newProfile;
}
if(error) {
   toast.error(error.message);
  throw error; 
}
return data;
}


export function authChange(callback) {
const {data} = supabase.auth.onAuthStateChange((_event, session) => {
  callback(session?.user || null, _event)
})
return ()=> data.subscription.unsubscribe();
}

export async function signOut() {
  const {error} = await supabase.auth.signOut();
  if(error) throw error
}