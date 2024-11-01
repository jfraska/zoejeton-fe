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

export async function GET(res) {
  const { searchParams } = new URL(res.url);
  const token = searchParams.get("access_token");
  const state = searchParams.get("state");

  if (token) {
    setCookie("client", token, options);

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
