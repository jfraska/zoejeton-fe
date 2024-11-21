import request from "@/lib/request";

const getAllGreeting = (params) => {
  return request.get(`/v1/greeting?${params}`);
};

const createGreeting = (data) => {
  return request.post("/v1/greeting", data);
};

const updateGreeting = (data) => {
  return request.patch("/v1/greeting", data);
};

const GreetingService = {
  getAllGreeting,
  createGreeting,
};

export default GreetingService;
