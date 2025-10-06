import { NextResponse } from "next/server";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export async function POST(req) {
  const { admin_username, admin_password } = await req.json();
  if (admin_username === ADMIN_USERNAME && admin_password === ADMIN_PASSWORD) {
    const res = NextResponse.json({message: "Logged in"});
    res.cookies.set({
      name: "celestiale_admin_token",
      value: ADMIN_TOKEN, // Strong token value
      httpOnly: true, // prevents client-side access
     // secure: true, // HTTPS
      sameSite: "strict", // prevents CSRF (Cross Site Request Forgery)
      path: "/",
      maxAge: 60 * 60 * 24
    });
    return res;
  } 
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
