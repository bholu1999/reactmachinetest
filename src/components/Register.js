import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [inputData, setinputData] = useState({ params: {} });

  const handleData = (e) => {
    const { name, value } = e.target;
    setinputData((prevData) => ({
      params: {
        ...prevData.params,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputData.params.name ||
      !inputData.params.email ||
      !inputData.params.phone ||
      !inputData.params.password
    ) {
      alert("All Field Are Mandatory");
    }
    console.log(inputData)
    if (inputData.params.password !== inputData.params.password_confirmation) {
      alert("Password Must be Same");
    } else {
      axios
        .post(
          "https://phpwebdevelopmentservices.com/project-react-backend/api/register",
          inputData
        )
        .then((res) => {
          if (res.data.error) {
            alert("Invalid Data");
            console.log(res.data)
          } else {
            alert("User Registration Succesfull");
            console.log(res.data)
            localStorage.clear()
            localStorage.setItem("token", res.data.result.token);
            localStorage.setItem("user", JSON.stringify(res.data.result.userData));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div class="search_main_section">
        <div class="container">
          <div class="row res_padd"></div>
          <div className="main-center-div">
            <div className="top-border-div">
              <form onSubmit={handleSubmit}>
                <div className="login-from-area">
                  <h2>Create Account</h2>
                  <div>
                    <input
                      type="text"
                      className="login-type"
                      placeholder="Full name"
                      name="name"
                      value={inputData.params.name}
                      onChange={handleData}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div>
                    <input
                      type="text"
                      className="login-type"
                      placeholder="Email"
                      name="email"
                      value={inputData.params.email}
                      onChange={handleData}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div>
                    <input
                      type="text"
                      className="login-type"
                      placeholder="Mobile number"
                      name="phone"
                      value={inputData.params.phone}
                      onChange={handleData}
                    />
                    <div className="clearfix"></div>
                  </div>

                  <div className="password-in">
                    <input
                      id="password-field"
                      type="password"
                      className="login-type"
                      name="password"
                      placeholder="password"
                      value={inputData.params.password}
                      onChange={handleData}
                    />
                    <div className="clearfix"></div>
                    <span
                      toggle="#password-field"
                      className="field-icon fa fa-fw fa-eye toggle-password"
                    ></span>
                  </div>
                  <div className="password-in">
                    <input
                      id="password-field-2"
                      type="password"
                      className="login-type"
                      name="password_confirmation"
                      placeholder="Confirm password"
                      value={inputData.params.password_confirmation}
                      onChange={handleData}
                    />
                    <div className="clearfix"></div>
                    <span
                      toggle="#password-field"
                      className="field-icon fa fa-fw fa-eye toggle-password"
                    ></span>
                  </div>
                  <p>
                    By clicking Sign In or continue with Facebook or Google, you
                    agree to all <a href=""> Terms of Service</a> and{" "}
                    <a href="#"> Privacy Policy</a>
                  </p>
                  <button
                    type="submit"
                    className="login-submit"
                    //onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div className="or-area">
                <span>Or Continue with</span>
              </div>
              <div className="login-socials-area">
                <div className="socials-btns">
                  <a href="#" className="common-btns facebook-btn">
                    <img src="./images/login-facebook.png" alt="" /> Facebook
                  </a>
                  <a href="#" className="common-btns google-btn">
                    <img src="./images/login-google.png" alt="" /> Google
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-account-div">
              <p>
                Already have an account? <a href="login.html">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
