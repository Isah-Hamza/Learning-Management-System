import axios from "axios";
import { ApiEndpoints } from "../api/api";

export const getAllSubjects = () => {
  return axios.get(ApiEndpoints.CURRICULUM.GET_ALL_SUBJECTS, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const getAllClass = () => {
  return axios.get(ApiEndpoints.CURRICULUM.GET_ALL_CLASS, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`
    }
  });
};

export const getSingleClass = ({ id }) => {
  return axios.get(`${ApiEndpoints.CURRICULUM.GET_SINGLE_CLASS}/${id}`, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const createSubject = (data) => {
  return axios.post(`${ApiEndpoints.CURRICULUM.CREATE_SUBJECT}`, data, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};

export const getTopics = ({ classId, subjectId }) => {
  return axios.get(
    `${ApiEndpoints.CURRICULUM.GET_SINGLE_CLASS}/${classId}/subject/${subjectId}`,
    {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token")
      }
    }
  );
};

export const createTopic = (data) => {
  return axios.post(`${ApiEndpoints.CURRICULUM.CREATE_TOPIC}`, data, {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token")
    }
  });
};
