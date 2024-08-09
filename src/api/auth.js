import request from "@/libs/request";

export function login(data) {
  return request({
    url: `${process.env.API_BASE_URL}/login`,
    method: "POST",
    data,
  });
}

export function signin(params, data) {
  return request({
    url: `${process.env.API_BASE_URL}/auth/redirect/${provider}`,
    method: "GET",
    data,
  });
}

export function getSession() {
  return request({
    url: `${process.env.API_BASE_URL}/auth/check`,
    method: "GET",
  });
}

export function register(data) {
  return request({
    url: `${process.env.API_BASE_URL}/register`,
    method: "POST",
    data,
  });
}

export function logout() {
  return request({
    url: `${process.env.API_BASE_URL}/logout`,
    method: "GET",
  });
}
