import axios from "axios";

const useAuth = (url, data) => {
  const createUser = (url, data) => {
    axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const loginUSer = (url, data) => {
    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => console.log(err));
  };
  return { createUser, loginUSer };
};
export default useAuth;
