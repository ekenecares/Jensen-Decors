import React from "react";
import "./Footer.css";
import logo2 from "../../images/jensenDecor-logo-white.png";
import pay1 from "../../images/payment.png";
import { useNavigate } from "react-router-dom";
import Scroll from "./Scroll"


import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div>
      <footer class="footer">
        <div className="stars6">
          <Canvas>
            <Stars
              count={500}
              speed={2}
              saturation={11}
              factor={0.8}
              radius={7}
            />
          </Canvas>
        </div>{" "}
        <div class="col">
          <div class="col1">
            <div class="logod">
              <img src={logo2} alt=""></img>
            </div>
            <p>
              <strong>Always Available:</strong> 10:00 am - 10:00 pm
            </p>
          </div>

          <div class="col2">
            <div class="lead">
              <h4>About</h4>
            </div>
            <p onClick={()=>navigate("/contact")}> Contact</p>
            <p onClick={()=>navigate("/cart")}> Cart</p>
            <p onClick={()=>navigate("/terms")}> Terms & Conditions</p>
          </div>

          <div class="col3">
            <div class="lead">
              <h4>Account</h4>
            </div>
            <p onClick={()=>navigate("/contact")}> Help </p>
            <p onClick={()=>navigate("/register")}> Register</p>
            <p onClick={()=>navigate("/login")}> Login</p>
          </div>

          <div class="col4">
            <div class="lead">
              <h4>Information</h4>
            </div>
            <p> App Development </p>

            <p>Available Payment Methods:</p>
            <div class="atm">
              <img src={pay1} alt=""></img>
            </div>

            <Scroll className="scroll"/>
          </div>
        </div>
        <div class="copyright">
          <p> © 2023, Reeds etc - E Retail Store Plaudit</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
