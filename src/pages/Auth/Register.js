import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    localStorage.setItem("users", JSON.stringify(formData));
    toast.success("User Successfully Registered");
    navigate("/login");
  };

  return (
    <div className="embody">
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form action="" onSubmit={registerUser}>
            <h3 className="text-center h3">Register</h3>
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
            <span>Or use your email for registration</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={inputChange}
              placeholder="Full name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={inputChange}
              placeholder="Email"
              className="form-control"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={inputChange}
              placeholder="Phone Number"
              className="form-control"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={inputChange}
              placeholder="Password"
              className="form-control"
            />
            <button type="submit" className="button border-0 loginn">
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
