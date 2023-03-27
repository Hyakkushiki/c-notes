import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  // console.log("verify:", req, "url:", url);

  let cookie = req.cookies.get("nextjs")?.value;
  // console.log("cookie", cookie); // => 'fast'
  const allCookies = req.cookies.getAll();
  // console.log("allCookies", allCookies, req.cookies.has('nextjs')); // => [{ name: 'nextjs', value: 'fast' }]

  //   if (!verify && url.includes("/")) {
  //     return NextResponse.redirect("http://localhost:3000/butt");
  //   }

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }
}
