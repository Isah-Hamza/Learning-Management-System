import {
  getAdminInfo,
  getTotalStudents,
  getTotalTeachers,
  updateAdminInfo
} from "../services/admin";

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

  const handleGetAdminInfo = () => {
    return new Promise((resolve, reject) => {
      getAdminInfo()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleUpdateAdminInfo = (data) => {
    return new Promise((resolve, reject) => {
      updateAdminInfo(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };

  return {
    handleGetTotalStudents,
    handleGetTotalTeachers,
    handleGetAdminInfo,
    handleUpdateAdminInfo
  };
};
