import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const changePassword = (data) => {
  return axios.post(`${ApiEndpoints.SECURITY.CHANGE_PASSWORD}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDExMGZlZWNmYjI4Mzk3NmJkZTdhMjdjOWUwYTE5YzJmZTA3ZWMyODhlNmMxOGRkMTE3OTFkMjNhNDJmNDU2MTIwOGUxNjc2OGM5NjgzMGMiLCJpYXQiOjE2ODA3NjY1OTAuMDkwODE2LCJuYmYiOjE2ODA3NjY1OTAuMDkwODI3LCJleHAiOjE3MTIzODg5ODguNTA0Njk4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HIc1Yad5P5q5EPMRwiF1Rku7PkyD45xYsu4XulLygI3xRoUkzRWveU36WVtnQK8gtGbcjPbfCMHTOrV3qxWd3AO6Nm2_pWUD1-S7D4PyNUVQzYlheantmYW4wd5pEMq5j10jzY5ohVccXrgmTJ_iaIF_Awqgl3pE6LEjEV4Yd2Ma1su2egHYor2m6OEkG0mP2YCKW_rw3d2Bjlxqhz3LMxzuAgVHopcRoY9FZ1ElPpzOHBCxRkESfAC46JR6ugxSf6SsOiRQDne7N57AwAGLSvJTCZrQ3wkfCtoRXTmL1LCznkQMqOwB9yql3w7zFgD66uxOnhJhi22WJaiHKFyvV0BXmppNpDNl9pAvMBg18Yq448_uqZJbFJPKVe5QaI2C5KXbn17kGnEziCch9cSiMzHkZqtS7c_0IZkq3lJesgJnu9orjHyKwUA2vZIKECTg-2gUVh9PDM31jCNZeSQOgFNjDAoFmuL-fsYityplq_yT65lESpBPx0ajTtnAGYTBekYqpsYFFqNXN0qm5TzVbNZBqrk_fmDBC790DA8R8Tll_auF4pIfKwUIHADOOEHrvjlS1T-SixabiBYOUqydHLwbowYiECT5sWzf6G2QIUEINLPRAw2Pf0KZaFki_nOoFi-krdQfkZY2Xv5M-F2bzGobjvWsyv8r9gPU5aatY3U"
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
