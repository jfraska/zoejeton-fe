import request from "@/lib/request";

export function getAllInvitation(params) {
  return request.get("/v1/invitation", {
    params,
  });
}

export function createInvitation(data) {
  return request.post("/v1/invitation", data);
}

export function showInvitation(params) {
  return request.get(`/v1/invitation/${params}`);
}

export function updateInvitation(data) {
  return request.patch("/v1/invitation", data);
}
