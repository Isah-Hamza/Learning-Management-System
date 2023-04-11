import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const getPicture = () => {
  return axios.get(`${ApiEndpoints.PROFILE_PICTURE.GET_PICTURE}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const uploadPicture = (data) => {
  return axios.post(`${ApiEndpoints.PROFILE_PICTURE.UPLOAD_PICTURE}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};
