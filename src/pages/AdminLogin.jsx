// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useUser } from "../context/UserContext";

export default function AdminLogin() {
  const { login, googleLogin, signup } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleEmailAuth = async () => {
    setError("");
    try {
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await googleLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto mt-30 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{isSignup ? "Sign Up" : "Login"}</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 px-3 py-2 border rounded w-full"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 px-3 py-2 border rounded w-full"
      />

      <button
        onClick={handleEmailAuth}
        className="mb-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        {isSignup ? "Sign Up" : "Login"}
      </button>

      <button
        onClick={handleGoogle}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-2"
      >
        Continue with Google
      </button>

      <button
        onClick={() => setIsSignup(!isSignup)}
        className="text-sm text-gray-600 hover:underline mt-1"
      >
        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </button>

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}
