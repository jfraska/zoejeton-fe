import { NextResponse } from "next/server";
import AuthService from "@/services/auth-service";

export async function middleware(req) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers.get("host");

  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname === "/" ? "" : url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // rewrites for dashboard pages
  if (hostname == `dashboard.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const session = await AuthService.getSession(req, NextResponse.next());

    if (!session && path !== "/login" && path !== "/signup") {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    } else if (session && (path == "/login" || path == "/signup")) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
    return NextResponse.rewrite(new URL(`/dashboard${path}`, req.nextUrl));
  }

  // rewrites for guestbook pages
  if (hostname == `guestbook.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const session = await AuthService.getSession(req, NextResponse.next());

    if (!session && path !== "/login") {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    } else if (session && path == "/login") {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
    return NextResponse.rewrite(new URL(`/guestbook${path}`, req.nextUrl));
  }

  // rewrite root application to `/home` folder
  if (
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN ||
    hostname === `www.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
  ) {
    if (url.pathname === "/bio") {
      return NextResponse.rewrite(new URL(`/bio`, req.nextUrl));
    }

    if (url.pathname === "/") {
      return NextResponse.rewrite(new URL(`/home/katalog`, req.nextUrl));
    }

    if (url.pathname === "/link") {
      return NextResponse.rewrite(new URL(`/home/link`, req.nextUrl));
    }

    return NextResponse.rewrite(new URL(`/home${path}`, req.nextUrl));
  }

  // rewrites for template pages
  if (hostname == `customize.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const response = NextResponse.rewrite(
      new URL(`/customize${path}`, req.nextUrl)
    );

    response.headers.set("pathname", url.pathname);

    return response;
  }

  // rewrite everything else to `/[domain] dynamic route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.nextUrl));
}

export const config = {
  matcher: ["/((?!.*\\.|api|_next/static|_next/image|favicon.ico).*)"],
};
