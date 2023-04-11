import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const changePassword = (data) => {
  return axios.post(`${ApiEndpoints.SECURITY.CHANGE_PASSWORD}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const setTwoStep = (data) => {
  return axios.post(`${ApiEndpoints.SECURITY.TWO_STEP}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const getTwoStep = () => {
  return axios.get(`${ApiEndpoints.SECURITY.GET_TWO_STEP}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    withCredentials: true
  });
};

export const requestOTP = (data) => {
  return axios.post(`${ApiEndpoints.SECURITY.REQUEST_OTP}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    withCredentials: true
  });
};

export const verifyOTP = (data) => {
  return axios.post(`${ApiEndpoints.SECURITY.VERIFY_OTP}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    withCredentials: true
  });
};
