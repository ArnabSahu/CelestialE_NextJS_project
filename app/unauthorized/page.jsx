// app/unauthorized/page.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.replace("/admin_signin"), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center backdrop-blur-xl">
      <h1 className="text-4xl font-bold p-16 rounded-2xl bg-red-300 text-red-700">Unauthorized Access!</h1>
      <p className="text-2xl text-white">Redirecting to admin login...</p>
    </div>
  );
}
