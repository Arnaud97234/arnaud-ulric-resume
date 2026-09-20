import { api } from "@/lib/api";

export const getProfile = async () => {
  const response = await api.get("/profile");
  return response.data;
};

export const getSkills = async () => {
  const response = await api.get("/intro");
  return response.data;
};

export const getExperience = async () => {
  const response = await api.get("/experience");
  return response.data;
};
