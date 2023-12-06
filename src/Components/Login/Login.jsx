import React from "react";
import style from "./loginStyle.module.css";
import { Link } from "react-router-dom";

function Login() {
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
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" id={style.inputMail}>
                  Password
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1" required="required" />
              </div>

              <Link to="/header">
                <button type="submit" className={style.loginBtn}>
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
