import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const login = (data) => {
  return axios.post(ApiEndpoints.AUTH.LOGIN, data, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });
};
