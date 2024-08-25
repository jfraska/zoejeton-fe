import request from "@/lib/request";

export function getAllGroup(params) {
  return request.get("/v1/group", {
    params: params,
  });
}

export function createGroup(data) {
  return request.post("/v1/group", data);
}

export function showGroup(params) {
  return request.get(`/v1/group/${params}`);
}

export function updateGroup(data) {
  return request.patch("/v1/group", data);
}

export function deleteGroup(params) {
  return request.get(`/v1/group/${params}`);
}
