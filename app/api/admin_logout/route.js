import { NextResponse } from "next/server";

export async function POST(req) {
  const res = NextResponse.redirect(new URL("/admin_signin", req.url));
    res.cookies.set({
      name: "celestiale_admin_token",
      value: "", // Strong token value
      httpOnly: true, // prevents client-side access
      //secure: true, // HTTPS
      sameSite: "strict", // prevents CSRF (Cross Site Request Forgery)
      path: "/",
      maxAge: 0
    });
    return res;
}
