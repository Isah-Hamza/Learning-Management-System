import { getTotalStudents, getTotalTeachers } from "../services/admin";

export const useAdmin = () => {
  const handleGetTotalStudents = () => {
    return new Promise((resolve, reject) => {
      getTotalStudents()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };
  const handleGetTotalTeachers = () => {
    return new Promise((resolve, reject) => {
      getTotalTeachers()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };
  return { handleGetTotalStudents, handleGetTotalTeachers };
};
