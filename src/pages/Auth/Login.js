import React, { useState } from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async(e) => {
    try{
      e.preventDefault();
      const loggedUser = JSON.parse(localStorage.getItem("users"));
      if (formData.email === loggedUser.email && formData.password === loggedUser.password) {
        localStorage.setItem("loggedIn", true)
        navigate("/");
      } else {
        alert("email is not correct");
      }
    }catch{
      alert("email is not correct");

    }

  };

  return (
    <div>
      <div className="embody">
        <div className="container">
          <div className="form-container sign-in">
            <form action="" onSubmit={loginUser}>
              <h3 className="text-center h3">Sign In</h3>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i>
                    <FaGooglePlusG />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a href="#" className="icon">
                  <i>
                    <FaGithub />
                  </i>
                </a>

                <a href="#" className="icon">
                  <i>
                    <FaInstagram />
                  </i>
                </a>
              </div>
              <span>Or use your email & password</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="form-control"
                required
              />{" "}
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="form-control"
              />
              <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                <button className="button border-0 loginn"> Sign In </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
