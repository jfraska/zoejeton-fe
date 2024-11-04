import request from "@/lib/request";
import { getCookie, hasCookie } from "cookies-next";

const login = (data) => {
  return request.post("/login", data);
};

const signIn = (provider, state) => {
  return request.get(`/auth/redirect/${provider}?state=${state}`);
};

const getSession = async (req, res) => {
  const headers = {};

  if (hasCookie("session", { req, res })) {
    const tokenClient = getCookie("session", { req, res });
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
};

const register = (data) => {
  return request.post("/register", data);
};

const logout = () => {
  return request.get("/logout");
};

const AuthService = {
  login,
  signIn,
  getSession,
  register,
  logout,
};

export default AuthService;
