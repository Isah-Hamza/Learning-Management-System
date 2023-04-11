import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const getUserLoggedActivity = () => {
  return axios.get(ApiEndpoints.USER.USER_LOGGED_ACTIVITY, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const getUserLevel = () => {
  return axios.get(ApiEndpoints.USER.USER_LEVEL, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};
