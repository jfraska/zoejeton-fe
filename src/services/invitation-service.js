import request from "@/lib/request";
import qs from "qs";

const getAllInvitation = (params) => {
  const query = qs.stringify(params, { encodeValuesOnly: true });
  return request.get(`/v1/invitation?${query}`);
};

const createInvitation = (data) => {
  return request.post("/v1/invitation", data);
};

const showInvitation = (params) => {
  return request.get(`/v1/invitation/${params}`);
};

const updateInvitation = (data) => {
  return request.patch("/v1/invitation", data);
};

const InvitationService = {
  getAllInvitation,
  createInvitation,
  showInvitation,
  updateInvitation,
};

export default InvitationService;
