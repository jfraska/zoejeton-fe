import { NextResponse } from "next/server";
import { getUrl } from "@/lib/utils";

const options = {
  path: "/",
  domain:
    process.env.NODE_ENV === "production"
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : undefined,
  secure: process.env.NODE_ENV === "production",
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("access_token");
  const state = searchParams.get("state");

  if (token) {
    const cookieValue = `client=${token}; Path=${options.path}; ${
      options.domain ? `Domain=${options.domain}; ` : ""
    }${options.secure ? "Secure; " : ""}HttpOnly; SameSite=Strict`;

    const response = NextResponse.redirect(getUrl("/", state));
    response.headers.set("Set-Cookie", cookieValue);

    return response;
  } else {
    return NextResponse.redirect(getUrl("/login", state));
  }
}
