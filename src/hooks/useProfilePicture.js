import { getPicture, uploadPicture } from "../services/profilePicture";

export const useProfilePicture = () => {
  const handleGetPicture = () => {
    return new Promise((resolve, reject) => {
      getPicture()
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  const handleUploadPicture = (data) => {
    return new Promise((resolve, reject) => {
      uploadPicture(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e.message));
    });
  };

  return { handleGetPicture, handleUploadPicture };
};
