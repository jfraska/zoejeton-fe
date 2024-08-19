import request from "@/lib/request";

export function getAllInvitation() {
  return request.get("/v1/invitation");
}

export function createInvitation(data) {
  return request.get("/v1/invitation", data);
}

export function showInvitation(params) {
  return request.get(`/v1/invitation/${id}`, { params });
}

export function updateInvitation(data) {
  return request.patch("/v1/invitation", data);
}
