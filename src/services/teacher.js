import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const getAllTeachers = () => {
  return axios.get(ApiEndpoints.TEACHERS.GET_ALL_TEACHERS, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const createTeacher = (data) => {
  return axios.post(ApiEndpoints.TEACHERS.CREATE_TEACHER, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const viewTeacher = ({ id }) => {
  return axios.get(`${ApiEndpoints.TEACHERS.VIEW_TEACHER}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const updateTeacher = ({ id, data }) => {
  return axios.patch(`${ApiEndpoints.TEACHERS.UPDATE_TEACHER}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const deleteTeacher = ({ id }) => {
  return axios.delete(`${ApiEndpoints.TEACHERS.DELETE_TEACHER}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};


export const getLoggedInTeacher = () => {
  return axios.get(`${ApiEndpoints.TEACHERS.GET_LOGGEDIN_TEACHER}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};
