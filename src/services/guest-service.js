import request from "@/lib/request";

export function getAllGuest(params) {
  return request.get("/v1/guest", {
    params: params,
  });
}

export function createGuest(data) {
  return request.post("/v1/guest", data);
}

export function showGuest(params) {
  return request.get(`/v1/guest/${params}`);
}

export function updateGuest(data) {
  return request.patch("/v1/guest", data);
}

export function deleteGuest(params) {
  return request.get(`/v1/guest/${params}`);
}
