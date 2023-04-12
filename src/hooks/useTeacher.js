import {
  getAllTeachers,
  createTeacher,
  deleteTeacher,
  updateTeacher,
  viewTeacher,
  getLoggedInTeacher
} from "../services/teacher";

export const useTeacher = () => {
  const handleGetAllTeachers = () => {
    return new Promise((resolve, reject) => {
      getAllTeachers()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleCreateTeacher = (data) => {
    return new Promise((resolve, reject) => {
      createTeacher(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleViewTeacher = ({ id }) => {
    return new Promise((resolve, reject) => {
      viewTeacher({ id })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleUpdateTeacher = ({ id, data }) => {
    return new Promise((resolve, reject) => {
      updateTeacher({ id, data })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleDeleteTeacher = ({ id }) => {
    return new Promise((resolve, reject) => {
      deleteTeacher({ id })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  
  const handleGetLoggedInTeacher = () => {
    return new Promise((resolve, reject) => {
      getLoggedInTeacher()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return {
    handleGetAllTeachers,
    handleCreateTeacher,
    handleViewTeacher,
    handleDeleteTeacher,
    handleUpdateTeacher,
    handleGetLoggedInTeacher
  };
};
