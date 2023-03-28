import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  // let verify = req.cookies.get("loggedin");
  // console.log("cookies: ", req.cookies.getAll());
  let url = req.url;

  // console.log("verify:", req, "url:", url);
  // console.log("verify:", !verify, !!verify, "url:", url);
  // console.log("cookies: ", req.cookies.getAll());

  // if (!verify && url.includes("/dashboard")) {
  //   return NextResponse.redirect("http://localhost:3000/");
  // }

  // if (verify && url === "http://localhost:3000/") {
  //   return NextResponse.redirect("http://localhost:3000/dashboard");
  // }

  // if (url === "http://localhost:3000/") {
  //   return NextResponse.redirect("http://localhost:3000/dashboard");
  // }
}

export const config = {
  // matcher: '/about/:path*',
  matcher: "/",
};
