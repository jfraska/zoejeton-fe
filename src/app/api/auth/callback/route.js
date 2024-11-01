const options = {
  path: "/",
  domain:
    process.env.NODE_ENV === "production"
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : undefined,
  secure: process.env.NODE_ENV === "production",
};

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("access_token");

  if (token) {
    const cookieValue = `client=${token}; Path=${options.path}; ${
      options.domain ? `Domain=${options.domain}; ` : ""
    }${options.secure ? "Secure; " : ""}`;

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
        "Set-Cookie": cookieValue,
      },
    });
  } else {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/login",
      },
    });
  }
}
