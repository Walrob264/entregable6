import React from "react";
import { useForm } from "react-hook-form";
import "./styles/RegisterPage.css";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    createUser(url, data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  const registerFinish = () => {
    navigate("/");
  };
  return (
    <div className="containt_form">
      <div className="form_register">
        <h2>Sign Up</h2>
        <form className="form_user" onSubmit={handleSubmit(submit)}>
          <div className="dats_user">
            <label htmlFor="email">Email</label>
            <input
              className="input_user"
              {...register("email")}
              type="text"
              id="email"
            />
          </div>
          <div className="dats_user">
            <label htmlFor="firstName">First Name</label>
            <input
              className="input_user"
              {...register("firstName")}
              type="text"
              id="firstName"
            />
          </div>
          <div className="dats_user">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="input_user"
              {...register("lastName")}
              type="text"
              id="lastName"
            />
          </div>

          <div className="dats_user">
            <label htmlFor="password">Password</label>
            <input
              className="input_user"
              {...register("password")}
              type="text"
              id="password"
            />
          </div>
          <div className="dats_user">
            <label htmlFor="phone">Phone(10 characters)</label>
            <input
              className="input_user"
              {...register("phone")}
              type="number"
              id="phone"
            />
          </div>
          <button onClick={registerFinish} className="button_user">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
