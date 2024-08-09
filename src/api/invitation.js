import request from "@/libs/request";

export function getAllInvitation() {
  return request({
    url: `${process.env.API_BASE_URL}/v1/invitation`,
    method: "GET",
  });
}

export function createInvitation(data) {
  return request({
    url: `${process.env.API_BASE_URL}/v1/invitation`,
    method: "POST",
    data,
  });
}

export function showInvitation(params) {
  return request({
    url: `${process.env.API_BASE_URL}/v1/invitation/${id}`,
    method: "GET",
    params,
  });
}

export function updateInvitation(data) {
  return request({
    url: `${process.env.API_BASE_URL}/v1/invitation`,
    method: "PATCH",
    data,
  });
}
