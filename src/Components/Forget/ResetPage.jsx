import React, { useState } from "react";
import style from "./forgetStyle.module.css";
import {Link, navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password === confirmPassword) {
  //    alert("Password Successfully Reset")
  //    navigate("/")
  //   } else {
  //     alert("Passwords do not match");
  //   }
  // };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post("http://192.168.1.121:5000/reset-passwords/:id/:token", {
        newPassword: newPassword,
       
      });
      sessionStorage.setItem("token", `${response.token}`);
      navigate("/")
      console.log(response.data);
     
      // Show a success message or redirect the user to a success page
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <div className="container-fluid" id={style.forget2}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
            <h1 className={style.forgetHead}>Reset Password</h1>

            <div class="card" className={style.form}>
              <div class="card-body">
                <form >
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label" id={style.inputMail1}>
                      New Password
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className={style.formControl}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required="required"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" id={style.inputMail2}>
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={style.formControl}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required="required"
                    />
                  </div>
                  <Link to="/">
                    <button type="submit" onClick={handleResetPassword} className={style.loginBtn}>
                      Reset Password
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPage;
