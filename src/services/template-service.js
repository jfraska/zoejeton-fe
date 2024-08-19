import request from "@/lib/request";

export function getAllTemplate() {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/template`,
    method: "GET",
  });
}

export function createTemplate(data) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/template`,
    method: "POST",
    data,
  });
}

export function showTemplate(params) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/template/${slug}`,
    method: "GET",
    params,
  });
}

export function updateTemplate(data) {
  return request({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/template`,
    method: "PATCH",
    data,
  });
}
