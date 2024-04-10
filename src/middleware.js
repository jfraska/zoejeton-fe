import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|_next/image|[\\w-]+\\.\\w+).*)",
  ],
};

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export default async function middleware(req) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers
    .get("host")
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) return;

  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // rewrite root application to `/home` folder
  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`/home${path === "/" ? "" : path}`, req.url)
    );
  }

  // rewrites for template pages
  if (hostname == `template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/template${path === "/" ? "" : path}`, req.url)
    );
  }

  // rewrites for bio pages
  if (hostname == `bio.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/bio${path === "/" ? "" : path}`, req.url)
    );
  }

  // // rewrite everything else to `/[domain]/[slug] dynamic route
  // return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
