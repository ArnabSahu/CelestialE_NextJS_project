"use client"
import { redirect } from 'next/navigation';
import { useState } from 'react';

export function AdminSigninContent() {
  return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center text-center rounded-2xl shadow-2xl mt-16 p-8 bg-white">
                <h3 className="font-bold text-[24px] leading-[30px] text-[#111827] mb-4">Admin Signin</h3>
                <AdminSigninForm/>
                <a className="mt-4 text-sm text-blue-600 hover:underline text-center" href="/">Forgot Password?</a>
                <a className="mt-4 text-sm text-blue-600 hover:underline" href="/create_account">Don't have an account? Create one</a>
            </div>
        </div>

    );
}

const AdminSigninForm = () => {
  const [admin_username, setAdmin_username] = useState("");
  const [admin_password, setAdmin_password] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admin_login",
      {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({admin_username, admin_password})
      }
    );
    if (res.ok) {
      
      redirect("/admin_dashboard");
    } else {
      const data = await res.json();
      alert(`${data.error}`);
    }
  };
    return (
      <form onSubmit={handleSubmit} 
            className="flex flex-col items-center justify-center">
                <input
                  type="text"
                  name="admin_username"
                  value={admin_username}
                  onChange={(e) => setAdmin_username(e.target.value)}
                  placeholder="Email"
                  required
                  className="mb-4 rounded-2xl px-8 py-2 shadow-xl focus:outline-1 placeholder-gray-400 text-gray-400 bg-white"
                />
                <input
                  type="password"
                  name="admin_password"
                  placeholder="Password"
                  value={admin_password}
                  onChange={(e) => setAdmin_password(e.target.value)}
                  required
                  className="mb-2 rounded-2xl px-8 py-2 shadow-xl focus:outline-1 placeholder-gray-400 text-gray-400 bg-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 mt-4 bg-gradient-to-bl from-gray-900 to-white text-black font-semibold rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-w transition mr-4"
                >
                  Sign in
                </button>
              </form>
    );
}