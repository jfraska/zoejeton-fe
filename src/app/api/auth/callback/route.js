const options = {
  path: "/",
  domain:
    process.env.NODE_ENV === "production"
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : null,
  secure: true,
  httpOnly: true,
  sameSite: "lax",
};

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("access_token");

  if (token) {
    const cookieValue =
      `session=${token}; Path=${options.path}; ` +
      (options.domain ? `Domain=${options.domain}; ` : "") +
      "Secure; " +
      // "HttpOnly; " +
      // `Expires=${expires};` +
      `SameSite=${options.sameSite};`;

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
