import { getUserLevel, getUserLoggedActivity } from "../services/user";

export const useUser = () => {
  const handleGetUserLoggedActivity = () => {
    return new Promise((resolve, reject) => {
      getUserLoggedActivity()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleGetUserLevel = () => {
    return new Promise((resolve, reject) => {
      getUserLevel()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return { handleGetUserLoggedActivity, handleGetUserLevel };
};
