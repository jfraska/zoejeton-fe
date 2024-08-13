import request from "@/libs/request";
import axios from "axios";

export function login(data) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
    method: "POST",
    data,
  });
}

export function signIn(provider) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/redirect/${provider}`,
    method: "GET",
  });
}

export async function getSession() {
  try {
    const res = await axios({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/check`,
      method: "GET",
    });

    return res.data;
  } catch (error) {
    console.error("fecth:", error);
    return null;
  }
}

export function register(data) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
    method: "POST",
    data,
  });
}

export function logout() {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`,
    method: "GET",
  });
}