import request from "@/lib/request";

const getAllMedia = (params) => {
  return request.get(`/v1/media${params}`);
};

const createMedia = (id, data) => {
  return request.post(`/v1/media/${id}`, data);
};

const deleteMedia = (params) => {
  return request.delete(`/v1/media${params}`);
};

const MediaService = {
  getAllMedia,
  createMedia,
  deleteMedia,
};

export default MediaService;
