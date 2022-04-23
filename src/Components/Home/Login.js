import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../HomeStyle/LogIn.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [Icon, setIcon] = useState(true);
  const onSubmit = (data) => {
    const ItemId = {
      Email: data.example,
      Password: data.exampleRequired,
    };
    fetch("http://localhost:5000/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/verify"));
  };

  return (
    <>
      <div className="Login mb-5">
        <h6 className="login-account">Log Into Account</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mb-4 p-3"
            placeholder="E-mail Address"
            {...register("example", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.example && (
            <p className="error">
              Invalid email address. Example john@doe.com.
            </p>
          )}
          <div className="pos">
            <input
              className="form-control mb-4 p-3"
              type={Icon ? "password" : "name"}
              placeholder="Password"
              {...register("exampleRequired", { required: true })}
            />
            <p className="logIcon" onClick={() => setIcon(!Icon)}>
              {Icon ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <input
                class="form-check-input  Remember btn-check-warning"
                type="checkbox"
                value="btn-check-warning"
                id="flexCheckDefault"
              />
              <label class="Remember ps-2" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div>
              <p className="forgot">Forgot Password</p>
            </div>
          </div>
          {errors.exampleRequired && (
            <p className="error">
              You have entered an invalid username or password
            </p>
          )}
          <input
            className="form-control log"
            type="submit"
            value="LOG INTO MY ACCOUNT"
          />
          <input
            className="form-control Create-log"
            value="Create New Account"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
