import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

const options = {
  path: "/",
  domain:
    process.env.NEXT_PUBLIC_APP_ENV === "local"
      ? ""
      : `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
  secure: process.env.NEXT_PUBLIC_APP_ENV === "production",
  httpOnly: process.env.NEXT_PUBLIC_APP_ENV === "production",
  sameSite: process.env.NEXT_PUBLIC_APP_ENV === "production" ? "strict" : "lax",
};

export function deleteSession() {
  deleteCookie("session");
}

export function createSession(token, expires) {
  const expiresDate = new Date(expires);

  setCookie("session", token, {
    ...options,
    expires: expiresDate,
  });
}

export function getSession() {
  return hasCookie("session") ? getCookie("session") : null;
}
