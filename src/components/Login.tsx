import React, { useState } from 'react';
import axios from 'axios';

type LoginProps = {
  onLoginSuccess: (token: string) => void;
};

export const Login = ({ onLoginSuccess }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        // Update the URL to point to your local API endpoint
        const response = await axios.post("http://localhost:8000/app/amani/v1.0/accounts/login/", {
          email,
          password,
        });
    
        const token = response.data.token; // Assuming the response contains a token
        onLoginSuccess(token);
        setError("");
      } catch (err) {
        setError("Invalid email or password. Please try again.");
      }
    };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Login</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
          <button
            type="submit"
            className="p-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

