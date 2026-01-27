import { createContext, useContext, useEffect, useState } from "react";
import { authChange, getUserProfile, signOut } from "../Lib/Auth";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({children})=> {
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [profile, setProfile] = useState(null);
useEffect(()=> {
    const cleanUp = authChange(async (user) => {
         setIsLoading(true);
        setUser(user);
        if(user) {
            try {
                const profile = await getUserProfile(user.id);
                setProfile(profile)
            } catch (error) {
                console.error('error fetching profile', error);
                toast.error('error happened during fetching profile', error)
            }
        }else {
            setProfile(null);
        }
        setIsLoading(false);
    })
    return cleanUp;
}, [])
const logout = async() => {
    try {
        await signOut();
    } catch (error) {
        toast.error('error fetching during logout process', error);
    }
}

const value = {
    logout,
    profile,
    user,
    isLoading,
    isLoggedIn: !!user
}

return(
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)
}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
