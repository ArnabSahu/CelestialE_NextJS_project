"use client"
import { useState } from 'react';

export function SigninContent() {
  return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center text-center rounded-2xl shadow-2xl mt-16 p-8 bg-white">
                <h3 className="font-bold text-[24px] leading-[30px] text-[#111827] mb-4">Sign in</h3>
                <SignInForm/>
                <a className="mt-4 text-sm text-blue-600 hover:underline text-center" href="/">Forgot Password?</a>
                <a className="mt-4 text-sm text-blue-600 hover:underline" href="/create_account">Don't have an account? Create one</a>
            </div>
        </div>

    );
}

const SignInForm = () => {
    const [formData, setFormData] = useState({
    user_email: "",
  
    user_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here the backend tasks to be done as form data are available here.
  };
    return (
      <form onSubmit={handleSubmit} 
            className="flex flex-col items-center justify-center">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="mb-4 rounded-2xl px-8 py-2 shadow-xl focus:outline-1 placeholder-gray-400 text-gray-400 bg-white"
                />
                <input
                  type="password"
                  name="user_password"
                  placeholder="Password"
                  value={formData.user_password}
                  onChange={handleChange}
                  required
                  className="rounded-2xl px-8 py-2 shadow-xl focus:outline-1 placeholder-gray-400 text-gray-400 bg-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 mt-16 bg-gradient-to-bl from-gray-900 to-white text-black font-semibold rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-w transition mr-4"
                >
                  Sign in
                </button>
              </form>
    );
}