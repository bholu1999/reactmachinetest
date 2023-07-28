import React, {useState} from "react";
import axios from "axios";

const Login = () => {
  const [loginData, setloginData] = useState({ params: {} });

  const handleData = (e) => {
    const { name, value } = e.target;
    setloginData((prevData) => ({
      params: {
        ...prevData.params,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !loginData.params.email || !loginData.params.password) {
      alert("Please Enter Details");
    }
    else {
      axios.post(
          "https://phpwebdevelopmentservices.com/project-react-backend/api/login", loginData
        )
        .then((res) => {
          if (res.data.error) {
            alert(res.data.error.meaning);
          } else {
            alert("User Registration Succesfull");
            console.log(res.data.result)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="search_main_section">
        <div className="container">
          <div className="row res_padd">
            <div className="bread_crumb comm_btomm">
              <a href="#">Home</a>
              <span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
              <a href="#">Enquiry</a>
            </div>

            <div className="main-center-div">
              <div className="top-border-div">
                <form onSubmit={handleSubmit}>
                <div className="login-from-area">
                  <h2>Sign In</h2>
                  <div>
                    <input
                      type="text"
                      className="login-type"
                      placeholder="Email or mobile number"
                      name="email"
                      value={loginData.params.email}
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
                      value={loginData.params.password}
                      onChange={handleData}
                    />
                    <div className="clearfix"></div>
                    <span
                      toggle="#password-field"
                      className="field-icon fa fa-fw fa-eye toggle-password"
                    ></span>
                  </div>
                  <div className="remmber-area">
                    <label className="list_checkBox">
                      Remember me
                      <input type="checkbox" name="text" />
                      <span className="list_checkmark"></span>
                    </label>
                    <a className="forgot-passwords" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <p>
                    By clicking Sign In or continue with Facebook or Google, you
                    agree to all <a href=""> Terms of Service</a> and{" "}
                    <a href="#"> Privacy Policy</a>
                  </p>
                  <button type="submit" className="login-submit">
                    Sign In
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
                  Don't have an account?{" "}
                  <a href="signup.html">Create Account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
