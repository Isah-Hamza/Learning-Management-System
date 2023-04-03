import { getAllStudents, createStudent } from "../services/student";

export const useStudent = () => {
  const handleGetAllStudents = () => {
    return new Promise((resolve, reject) => {
      getAllStudents()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleCreateStudent = (data) => {
    return new Promise((resolve, reject) => {
      createStudent(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };

  return { handleGetAllStudents, handleCreateStudent };
};
