import request from "@/lib/request";
import qs from "qs";

export function getAllInvitation(params) {
  const query = qs.stringify(params, { encodeValuesOnly: true });
  return request.get(`/v1/invitation?${query}`);
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
