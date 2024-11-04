import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

const options = {
  path: "/",
  domain:
    process.env.NODE_ENV === "production"
      ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
      : null,
  secure: true,
  // httpOnly: true,
  sameSite: "lax",
};

export function deleteSession() {
  deleteCookie("session");
}

export function createSession(token, expires) {
  setCookie("session", token, { ...options, expires });
}

export function getSession() {
  return hasCookie("session") ? getCookie("session") : null;
}
