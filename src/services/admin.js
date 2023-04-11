import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const getTotalStudents = () => {
  return axios.get(ApiEndpoints.ADMIN.GET_TOTAL_STUDENTS, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const getTotalTeachers = () => {
  return axios.get(ApiEndpoints.ADMIN.GET_TOTAL_TEACHERS, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const getAdminInfo = () => {
  return axios.get(ApiEndpoints.ADMIN.GET_ADMIN_INFO, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const updateAdminInfo = (data) => {
  return axios.post(ApiEndpoints.ADMIN.UPDATE_ADMIN_INFO, data, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};
