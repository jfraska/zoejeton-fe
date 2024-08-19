import request from "@/lib/request";
import { getCookie, hasCookie } from "cookies-next";

export function login(data) {
  return request.post("/login", data);
}

export function signIn(provider) {
  return request.get(`/auth/redirect/${provider}`);
}

export async function getSession(req, res) {
  const headers = {};

  if (hasCookie("client", { req, res })) {
    const tokenClient = getCookie("client", { req, res });
    headers.Authorization = `Bearer ${tokenClient}`;
  }

  try {
    const res = await request({
      url: `/auth/check`,
      method: "GET",
      headers,
    });
    return res.data;
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
