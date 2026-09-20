import axios from "axios";

export const api = axios.create({
  baseURL: "https://arnaud-ulric-resume-backend.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});
