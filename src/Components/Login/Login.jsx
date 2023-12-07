import React, { useState } from "react";
import style from "./loginStyle.module.css";
import axios from "axios";
import { Link, useNavigate,navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const data = { email: "", password: "" };

  const [inputData, setInputData] = useState(data);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    };

    const response = await fetch(`http://192.168.1.121:5000/login?email=${inputData.email}&password=${inputData.password}`, option, { mode: "cors" });
    const user = await response.json();

    if (response.ok) {
      // console.log(user);
      navigate("/header");
    } else {
      console.log("error");
    }
    sessionStorage.setItem("token", `${user.token}`);
  };

  return (
    <>
      <div className="container-fluid" id={style.loginPage}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6" id={style.img}>
            <img src="login-img.jpg"></img>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6" id={style.loginForm}>
            <h2 className={style.demeterHead}>Demeter Fragrances</h2>
            <p className={style.signPara}>Sign into your account</p>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" id={style.inputMail}>
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  // value={inputData.email}
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required="required"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" id={style.inputMail}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  // value={inputData.password}
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputPassword1"
                  required="required"
                />
              </div>

              <Link to="/header">
                <button type="submit" onClick={handleSubmit} className={style.loginBtn}>
                  Login
                </button>
              </Link>

              <div className="text-center mt-4">
                <a href="#" className={style.forget}>
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
