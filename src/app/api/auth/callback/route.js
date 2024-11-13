const options = {
  path: "/",
  domain:
    process.env.NEXT_PUBLIC_APP_ENV === "local"
      ? null
      : `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
  secure: process.env.NEXT_PUBLIC_APP_ENV === "production",
  httpOnly: process.env.NEXT_PUBLIC_APP_ENV === "production",
  sameSite: process.env.NEXT_PUBLIC_APP_ENV === "production" ? "strict" : "lax",
};

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("access_token");

  if (token) {
    const cookieValue = [
      `session=${encodeURIComponent(token)}`,
      `Path=${options.path}`,
      options.domain && `Domain=${options.domain}`,
      options.secure && "Secure",
      options.httpOnly && "HttpOnly",
      `SameSite=${options.sameSite}`,
    ]
      .filter(Boolean)
      .join("; ");

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
