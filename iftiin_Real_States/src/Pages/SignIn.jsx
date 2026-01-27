import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../Lib/Auth';
import toast from 'react-hot-toast';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event)=> {
    event.preventDefault();
   setIsLoading(true);
   setError(null);
   try {
    await signIn(email, password);
    navigate('/')
   } catch (error) {
    toast.error('error exsist during sign In', error)
    console.error('error happened during sign In', error.message)
   }finally {
    setIsLoading(false);
   }
  }
return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign into access your account</p>
        </div>
         <div className="bg-white w-full shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
             <div className="flex flex-col gap-1 mb-6">
              <label>Email</label>
              <input
              id='email'
                className="px-4 py-2 border-2 border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="email"
                placeholder="your@gmail.com"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
             <div className="flex flex-col gap-1 mb-6">
              <label>Password</label>
              <input
              id='password'
                className="px-4 py-2 border-2 border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="password"
                 placeholder="••••••••"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              </div>
               <button type='submit' className="py-2 px-4 rounded bg-blue-700 text-white text-center w-full transition" disabled={isLoading}>
             Sign In
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link
                to="/GetStarted"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Get Started
              </Link>
            </p>
          </div>
         </div>
      </div>
    </div>
  )
}

export default SignIn