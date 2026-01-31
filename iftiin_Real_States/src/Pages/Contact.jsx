import React, { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { gettingNewUserInfo } from "../Lib/ContactForm";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [contactId, setContactId] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(()=> {
    if(user) {
      setContactId(user.id);
    }
  }, [user])
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    if (!user) {
      toast.error("Hi your are not Logged please go SignIn page", {position:"top-right"});
      navigate("/signIn");
      return;
    }
    // if (!fullName.trim() || message.trim() || email.trim()) {
    //   toast.error("please during the registration not needs to make a space");
    //   setError("please the space not needs check it...");
    //   return;
    // }
    try {
      await gettingNewUserInfo(
        {
           Full_name: fullName,
           Email: email,
           Message: message,
           Contact_id: contactId
        }
      );
      toast.success("welcome our user we already stand to service as");
      setFullName('');
      setEmail('');
      setMessage('')
    } catch (error) {
      toast.error("fetching new user failed");
      console.error("error exsist during the register", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="max-w-xl w-full">
          <div className="text-center mb-10">
            <span className="flex items-center justify-center gap-2 text-2xl bold">
              <MdCall className="text-blue-700 text-3xl" />
              Contact us
            </span>
            <p className="text-gray-500 hover:text-gray-700">
              let's contact us if you need to get more external information
              about our properties
            </p>
          </div>
          <div className="bg-white shadow-md rounded p-5">
            <form onSubmit={handleSubmit} className="p-3">
              <div className="flex flex-col gap-3 mb-3">
                <label className="text-gray-800 font-semibold">Full name</label>
                <input
                  className="px-4 py-3 rounded bg-[#F8F9FA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mb-3">
                <label className="text-gray-800 font-semibold">Email</label>
                <input
                  className="px-4 py-3 rounded bg-[#F8F9FA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mb-3">
                <label className="text-gray-800 font-semibold">Message</label>
                <textarea
                  className="px-4 py-3 h-30 rounded bg-[#F8F9FA] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button
                  className="px-4 py-3 mt-2 rounded text-center  bg-[#000000] text-white w-full mb-2 cursor-pointer hover:text-indigo-700"
                  type="submit"
                >
                  {isLoading ? "submiting.." : "submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
