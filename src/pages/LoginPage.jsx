import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loginError, setLoginError] = useState(false);
  const [login, setLogin] = useState(false);
  const { loginUSer } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setLogin(user);
    }
  }, []);

  const submit = (data) => {
    reset({
      email: "",
      password: "",
    });
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    loginUSer(url, data);

    if (localStorage.getItem("token")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setLogin(user);
      setLoginError(false);
      navigate("/");
    } else {
      setLogin(false);
      setLoginError(true);
    }
  };
  const handleCloseError = () => {
    setLoginError(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLogin(false);
  };

  return (
    <div className="containt_form">
      {loginError && (
        <div className="error_login">
          <i className="bx bx-error-circle"></i>
          <h2 className="text_error">Email or password incorrect</h2>
          <button onClick={handleCloseError} className="button_error">
            ok
          </button>
        </div>
      )}
      {login ? (
        <div className="login_user">
          <i className="bx bx-user"></i>
          <h1>{login.firstName}</h1>
          <h2>{login.email}</h2>
          <button className="log_out" onClick={handleLogOut}>
            log Out
          </button>
        </div>
      ) : (
        <form className="form_user-login" onSubmit={handleSubmit(submit)}>
          <h2 className="text-register">
            Welcome! Enter your email and password to continue
          </h2>
          <div className="dats_user">
            <label htmlFor="email">Email</label>
            <input
              className="input_user"
              {...register("email")}
              type="email"
              id="email"
            />
          </div>
          <div className="dats_user">
            <label htmlFor="password">Password</label>
            <input
              className="input_user"
              {...register("password")}
              type="password"
              id="password"
            />
          </div>
          <button className="button_user">Login</button>
          <p>
            Don't have an account?{" "}
            <span style={{ cursor: "pointer" }}>
              <Link to="/register">Click here</Link>
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
