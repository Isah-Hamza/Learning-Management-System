import { getAllSubjects } from "../services/curriculum";

export const useCurriculum = () => {
  const handleGetAllSubjects = () => {
    return new Promise((resolve, reject) => {
      getAllSubjects()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return { handleGetAllSubjects };
};
