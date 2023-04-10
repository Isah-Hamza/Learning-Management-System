import {
  changePassword,
  getTwoStep,
  requestOTP,
  setTwoStep,
  verifyOTP
} from "../services/security";

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

  const handleRequestOTP = (data) => {
    return new Promise((resolve, reject) => {
      requestOTP(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };

  const handleVerifyOTP = (data) => {
    return new Promise((resolve, reject) => {
      verifyOTP(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };

  return {
    handleChangePassword,
    handleSetTwoStep,
    handleGetTwoStep,
    handleRequestOTP,
    handleVerifyOTP
  };
};
