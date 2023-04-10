import { changePassword, getTwoStep, setTwoStep } from "../services/security";

export const useSecurity = () => {
  const handleChangePassword = (data) => {
    return new Promise((resolve, reject) => {
      changePassword(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };

  const handleSetTwoStep = (data) => {
    return new Promise((resolve, reject) => {
      setTwoStep(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleGetTwoStep = () => {
    return new Promise((resolve, reject) => {
      getTwoStep()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return { handleChangePassword, handleSetTwoStep, handleGetTwoStep };
};
