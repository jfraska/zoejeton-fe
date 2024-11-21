import request from "@/lib/request";
import qs from "qs";

const getAllTemplate = (params) => {
  const query = qs.stringify(params, { encodeValuesOnly: true });
  return request.get(`/v1/template?${query}`);
};

const createTemplate = (data) => {
  return request.post("/v1/template", data);
};

const showTemplate = (slug) => {
  return request.get(`/v1/template${slug}`);
};

const updateTemplate = (data) => {
  return request.patch("/v1/template", data);
};

const TemplateService = {
  getAllTemplate,
  createTemplate,
  showTemplate,
  updateTemplate,
};

export default TemplateService;
