import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const getAllStudents = () => {
  return axios.get(ApiEndpoints.STUDENTS.GET_ALL_STUDENTS, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const createStudent = (data) => {
  return axios.post(ApiEndpoints.STUDENTS.CREATE_STUDENT, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const viewStudent = ({ id }) => {
  return axios.get(`${ApiEndpoints.STUDENTS.VIEW_STUDENT}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const getLoggedInStudent = () => {
  return axios.get(`${ApiEndpoints.STUDENTS.GET_LOGGEDIN_STUDENT}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const updateStudent = ({ id, data }) => {
  return axios.patch(`${ApiEndpoints.STUDENTS.UPDATE_STUDENT}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const deleteStudent = ({ id }) => {
  return axios.delete(`${ApiEndpoints.STUDENTS.DELETE_STUDENT}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const downloadStudent = () => {
  return axios.get(`${ApiEndpoints.STUDENTS.DOWNLOAD_STUDENTS}`, {
    headers: {
      "Content-Type": "text/csv",
      Authorization: "Bearer " + window.localStorage.getItem("token")
    },
    withCredentials: true
  });
};

export const searchStudent = ({ search_term, class_level_id }) => {
  return axios.get(
    `${ApiEndpoints.STUDENTS.SEARCH_STUDENTS}?class_level_id=${class_level_id}&search_term=${search_term}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token")
      },
      withCredentials: true
    }
  );
};

export const readTopic = ({ topic_id }) => {
  return axios.get(`${ApiEndpoints.STUDENTS.READ_TOPIC}/${topic_id}`, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};
