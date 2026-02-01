import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStarted } from "../Lib/Auth";
import toast from "react-hot-toast";

const GetStarted = () => {
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      await getStarted(username, email, password);
      setSuccess(true);
      setTimeout(() => {
        navigate("/signIn");
      }, 3000);
      setUsename("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("error exsists during creating singUp", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
            <p className="text-gray-600 mb-4">
              Your account has been created successfully. Please check your
              email for verification.
            </p>
            <p className="text-gray-500 text-sm">
              Redirecting to sign in page in a few seconds...
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500">
            Join our community and Sharing your ideas
          </p>
        </div>
        <div className="bg-white w-full shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-gray-700 text-sm font-semibold mb-2">
                Username
              </label>
              <input
                className="px-4 py-2 border-2 border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                id="username"
                placeholder="please enter username"
                required
                value={username}
                onChange={(e) => setUsename(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label>Email</label>
              <input
                id="email"
                className="px-4 py-2 border-2 border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="email"
                placeholder="your@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label>Password</label>
              <input
                id="password"
                className="px-4 py-2 border-2 border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characteristcics
              </p>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <label>Confirm password</label>
              <input
                id="password"
                className="px-4 py-2 border-2 border-gray-200 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="password"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characteristcics
              </p>
            </div>
            <button
              type="submit"
              className="py-2 px-4 rounded bg-blue-700 text-white text-center w-full"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signIn"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
