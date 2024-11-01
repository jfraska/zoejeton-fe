import { NextResponse } from "next/server";
import { getUrl } from "@/lib/utils";
import { setCookie } from "cookies-next";

const options = {
  path: "/",
  domain:
    process.env.NODE_ENV === "production"
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : null,
  secure: true,
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("access_token");
  const state = searchParams.get("state");

  if (token) {
    setCookie("client", token, {
      ...options,
      req: request,
      res: NextResponse.next(),
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: getUrl("/", state),
      },
    });
  } else {
    return new Response(null, {
      status: 302,
      headers: { Location: getUrl("/login", state) },
    });
  }
}
