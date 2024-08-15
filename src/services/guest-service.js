import request from "@/lib/request";

export function getAllGuest() {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/guest`,
    method: "GET",
  });
}

export function createGuest(data) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/guest`,
    method: "POST",
    data,
  });
}

export function showGuest(params) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/guest/${id}`,
    method: "GET",
    params,
  });
}

export function updateGuest(data) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/guest`,
    method: "PATCH",
    data,
  });
}

export function deleteGuest(params) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/guest`,
    method: "DELETE",
    params,
  });
}
