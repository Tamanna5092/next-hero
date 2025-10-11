import { NextResponse } from "next/server";

// const user = true
const cookie = "Next-hero-token";

export const middleware = (request) => {
  const cookies = request.cookies.get("token");
  if (!cookies || cookies?.value !== cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: [ "/dashboard", "/categories"],
};
