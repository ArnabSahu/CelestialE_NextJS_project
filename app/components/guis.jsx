"use client";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent">
      {/* Logo */}
      <div className='flex flex-row'>
          <h1 className="font-extrabold text-[22px] text-amber-500">
            Celestial
          </h1>
          <h1 className="font-extrabold text-[22px] text-white">
            E
          </h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="text-2xl text-gray-700 hover:text-gray-900"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-[72px] right-4 w-56 bg-white shadow-xl rounded-xl flex flex-col items-center gap-3 py-4 z-50">
          <a
            href="/create_account"
            className="w-40 text-center px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
          >
            Create Account
          </a>
          <a
            href="/sign_in"
            className="w-40 text-center px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition"
          >
            Sign in
          </a>
          <a
            href="/waitlist"
            className="w-40 text-center px-4 py-2 text-gray-700 hover:text-gray-900 font-semibold transition"
          >
            Waitlist
          </a>
        </div>
      )}
    </header>
  );
}
export function Header2() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center bg-[#09041C]/70 backdrop-blur-2xl px-6 py-4">
      {/* Logo */}
      <div className='flex flex-row'>
          <h1 className="font-extrabold text-[22px] text-amber-500">
            Celestial
          </h1>
          <h1 className="font-extrabold text-[22px] text-white">
            E Administration
          </h1>
      </div>
      <form method="POST" action="api/admin_logout">
        <button className="px-4 py-3 bg-gradient-to-bl from-purple-100 via-purple-500 to-blue-500 rounded-2xl hover:bg-gradient-to-tr hover:from-purple-100 hover:via-purple-500 hover:to-blue-500" type="submit">
          Sign Out
        </button>
      </form>
      
    </header>
  );
}


export function Footer() {
  return (
    <footer className="w-full flex flex-wrap justify-center items-center bg-black sm:px-8 px-4 py-4">
      <p className="font-normal text-[14px] leading-[20px] text-white">© 2025 CelestialE — All rights reserved</p>
    </footer>
  );
}

export function Accordion({question, answer}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col bg-transparent px-6 py-4">

      {/* Hamburger Button */}
      <button
        className="text-lg text-gray-700 hover:text-gray-500 px-16 py-3 rounded-2xl bg-white shadow-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? `${question} ✕` : `${question} ▾`}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="mt-4 w-full bg-white shadow-xl rounded-xl p-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}