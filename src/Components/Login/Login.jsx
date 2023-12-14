import React, { useEffect, useState } from "react";
import style from "./loginStyle.module.css";
import axios from "axios";
import { Link, useNavigate, navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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
    // event.preventDefault();
    if (!inputData.email || !inputData.password) {
      toast.error("Please enter both email and password");
    } else if (inputData.email === "shubhamkumar@gmail.com" && inputData.password === "kumar@1234") {
      navigate("/header");
    } else {
      console.log("Invalid email or password");
      // toast.error("Invalid email or password");
      alert("Invalid email or password");
    }
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
      console.log(user);
    } else {
      console.log("error");
    }
    sessionStorage.setItem("token", `${user.token}`);

    localStorage.setItem("login", true);
  };

  useEffect(() => {
    // sessionStorage.setItem("login", true);
    let login = localStorage.getItem("login");
    if (login) {
      console.log(login);
      navigate("/");
    }
  });

  return (
    <>
      <div className="container-fluid" id={style.loginPage}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12" id={style.img}>
            <img src="login-img.jpg"></img>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12" id={style.loginForm}>
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
                  value={inputData.email}
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
                  value={inputData.password}
                  onChange={handleChange}
                  class="form-control"
                  id="exampleInputPassword1"
                  required="required"
                />
              </div>

              <button type="submit" onClick={handleSubmit} className={style.loginBtn}>
                Login
              </button>

              <div className="text-center mt-4">
                <Link to="/forget">
                  <a href="#" className={style.forget}>
                    Forget Password?
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
