import request from "@/lib/request";
import { getCookie, hasCookie } from "cookies-next";

export function login(data) {
  return request.post("/login", data);
}

export function signIn(provider, state) {
  return request.get(`/auth/redirect/${provider}?state=${state}`);
}

export async function getSession(req, res) {
  const headers = {};

  if (hasCookie("client", { req, res })) {
    const tokenClient = getCookie("client", { req, res });
    headers.Authorization = `Bearer ${tokenClient}`;
  }

  try {
    const res = await request.get(`/auth/check`, { headers });

    if (!res.success) {
      return null;
    }

    return res;
  } catch (e) {
    return null;
  }
}

export function register(data) {
  return request.post("/register", data);
}

export function logout() {
  return request.get("/logout");
}
