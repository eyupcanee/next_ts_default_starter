import { NextResponse, NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  let user = request.cookies.get("userProfile");
  let url = request.url;
  console.log("test");
  if (!user && url.includes("/userpage")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
