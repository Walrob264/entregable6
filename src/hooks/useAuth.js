import axios from "axios";

const useAuth = () => {
  const createUser = (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const loginUser = (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return { createUser, loginUser };
};

export default useAuth;
