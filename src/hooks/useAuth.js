import { login } from "../services/authentications";

export const useAuth = () => {
  const handleLogin = (data) => {
    return new Promise((resolve, reject) => {
      login(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return { handleLogin };
};
