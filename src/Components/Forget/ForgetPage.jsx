import React, { useState } from "react";
import style from "./forgetStyle.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function ForgetPage() {
  const [email, setEmail] = useState("");

  const handleForgetPassword = async () => {
    try {
      const response = await axios.post("http://192.168.1.121:5000/forgot-password", {
        email: email,
      });
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
            <h1 className={style.forgetHead}>Forget Email</h1>

            <div class="card" className={style.form}>
              <div class="card-body">
                <form >
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" id={style.inputMail}>
                      Please Enter Email address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={style.formControl}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required="required"
                    />
                  </div>

                  <NavLink to="/reset">
                    <button type="submit" onClick={handleForgetPassword} className={style.loginBtn}>
                      Submit
                    </button>
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPage;
