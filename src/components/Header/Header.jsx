import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { IoHomeSharp } from "react-icons/io5";
import { ShopContext } from "../Context_Api/ContextApi";
import Headroom from "react-headroom";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import logo1 from "../../images/jensenDecor.png";
import logo2 from "../../images/jensenDecor-logo-white.png";

const Header = (props) => {
  const navigate = useNavigate();
  let loggedUser = JSON.parse(localStorage.getItem("users"));
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  if (!loggedUser) {
    loggedUser = "login";
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("users");
    navigate("/register");
  };

  const logo = (
    <div className="logs">
      <img src={logo1} className={color ? "img-no" : "img-show"} />
      <img src={logo2} className={color ? "img-show" : "img-no"} />{" "}
    </div>
  );

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const DropDown = ({ children, ShowDropContent }) => {
    const [open, setOpen] = useState(false);
    const showDrop = open && ShowDropContent;
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className={color ? "header-relative lint" : "header-relative"}>
          {children}
          <span
            style={{ transform: showDrop ? "scaleX(1)" : "scaleX(0)" }}
            className="underliner"
          />
        </div>
        <AnimatePresence>
          {showDrop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeInOut }}
            >
              <div className="droped-down">
                <div className="drop-down">
                  <div className="drop"></div>
                  <ShowDropContent />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div>
      <Headroom className="headroom">
        <header className="fic">
          <motion.div className={color ? "header header-bg" : "header"}>
            <div className="stars4">
              <Canvas>
                <Stars
                  count={300}
                  speed={2}
                  saturation={11}
                  factor={0.4}
                  radius={7}
                />
              </Canvas>
            </div>{" "}
            <nav>
              <div className="logo">
                <NavLink to="/">{logo}</NavLink>
              </div>

              <div
                id="naver"
                className={showMenu ? `${"show-nav"}` : `${"hide-nav"}`}
              >
                <div
                  className={
                    showMenu
                      ? `${"nav-wrap"} ${"show-nav-wrap"}`
                      : `${"nav-wrap"}`
                  }
                  onClick={hideMenu}
                ></div>

                <li className="logo-mobile">
                  <FaTimes className="x" onClick={hideMenu} />
                </li>
                <div className="senter">
                  <NavLink to="/category/frame" className="link">
                    <li>
                      <DropDown ShowDropContent={Frames}> Frames </DropDown>
                    </li>
                  </NavLink>

                  <NavLink to="/category/metal-wall-art" className="link">
                    <li>
                      <DropDown ShowDropContent={WallArt}>Wall Art</DropDown>
                    </li>
                  </NavLink>

                  <NavLink to="/category/mirror" className="link">
                    <li>
                      <DropDown ShowDropContent={Mirror}>Mirror</DropDown>
                    </li>
                  </NavLink>

                  <NavLink to="/" className="shaper">
                    <li>
                      <a className="">
                        <IoHomeSharp className={color ? "shap lint" : "shap"} />{" "}
                      </a>
                    </li>
                  </NavLink>

                  <NavLink to="/category/shelves" className="link">
                    <li>
                      <DropDown ShowDropContent={Shelves}>Shelves</DropDown>
                    </li>
                  </NavLink>

                  <NavLink to="/category/wallpaper" className="link">
                    <li>
                      <DropDown ShowDropContent={WallPaper}>
                        Wall Paper
                      </DropDown>
                    </li>
                  </NavLink>

                  <NavLink to="/category/taxidermy" className="link">
                    <li>
                      <DropDown ShowDropContent={Taxidermy}>
                        Wall Animals
                      </DropDown>
                    </li>
                  </NavLink>
                </div>
              </div>

              <div className="cta">
                <div className="linker" onClick={(e) => handleLogout(e)}>
                  <li className="rel">
                    <h3 className={color ? "ril lint" : "ril"}>
                      logout/{loggedUser.name}
                    </h3>
                  </li>
                </div>

                <NavLink to="/login" className="link">
                  <li>
                    <RiLoginCircleLine className="img" />
                  </li>
                </NavLink>

                <NavLink to="/cart" className="link">
                  <li>
                    <MdOutlineAddShoppingCart className="img" />
                  </li>
                </NavLink>
                <NavLink to="/register" className="link">
                  <li>
                    <h3 className="ril">Register</h3>
                  </li>
                </NavLink>
              </div>
            </nav>
            <HiOutlineMenuAlt3
              className={color ? "menu-brown lint" : "menu-brown"}
              onClick={toggleMenu}
            />
          </motion.div>
        </header>
      </Headroom>
    </div>
  );
};

const Frames = () => {
  return (
    <div className="drop-slow">
      <div className="header-color"></div>
      <div className="wall-arts">
        <div className="drop-prod">
          <div className="ff">Featured Products</div>
          <div>Melanin's Cure</div>
          <div>Willow's Kiss</div>
          <div>Guillotine Crown</div>
          <div>Niagara Falls</div>
          <div>Grotesque Beauty</div>
        </div>

        <div className="drop-prod">
          <div className="ff">Brands</div>
          <NavLink className="drop-prod" to="/darius">
            Darius
          </NavLink>
          <NavLink className="drop-prod" to="/danks">
            Danks
          </NavLink>
          <NavLink className="drop-prod" to="/fioral">
            Fioral
          </NavLink>
          <NavLink className="drop-prod" to="/aurora">
            Aurora
          </NavLink>
          <NavLink className="drop-prod" to="/indianara">
            Indianara
          </NavLink>
          <NavLink className="drop-prod" to="/piximperfect">
            Piximperfect
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const WallArt = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="drop-slow">
      <div className="header-color2"></div>
      <div className="wall-arts">
        <div className="drop-prod">
          <div className="ff">Featured Products</div>
          <div>Black & Bold Arts</div>
          <div>Frieren's Zoglyte</div>
          <div>Dark Arts</div>
          <div>Hidden Frame</div>
          <div>Wall Decal</div>
        </div>

        <div className="drop-prod">
          <div className="ff">Brands</div>
          <NavLink className="drop-prod" to="/darius">
            Darius
          </NavLink>
          <NavLink className="drop-prod" to="/iwaju">
            Iwaju
          </NavLink>
          <NavLink className="drop-prod" to="/fioral">
            Fioral
          </NavLink>
          <NavLink className="drop-prod" to="/aurora">
            Aurora
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Mirror = () => {
  return (
    <div className="drop-slow">
      <div className="header-color3"></div>
      <div className="wall-arts">
        <div className="drop-prod">
          <div className="ff">Featured Products</div>
          <div>Thaddeuses Quare</div>
          <div>Oval Mirror</div>
          <div>Reflect Octagon</div>
          <div>Italian Ornate</div>
          <div>Ornate Mirror</div>
        </div>

        <div className="drop-prod">
          <div className="ff">Brands</div>
          <NavLink className="drop-prod" to="/darius">
            Darius
          </NavLink>
          <NavLink className="drop-prod" to="/fioral">
            Fioral
          </NavLink>
          <NavLink className="drop-prod" to="/aurora">
            Aurora
          </NavLink>
          <NavLink className="drop-prod" to="/hiccups">
            Hiccups
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Shelves = () => {
  return (
    <div className="drop-slow">
      <div className="header-color4"></div>
      <div className="wall-arts">
        <div className="drop-prod">
          <div className="ff">Featured Products</div>
          <div>Detective's Spell</div>
          <div>Fantasies Logic</div>
          <div>Melanin's Drip</div>
          <div>Pingree Solid</div>
          <div>Stellar Series</div>
        </div>

        <div className="drop-prod">
          <div className="ff">Brands</div>
          <NavLink className="drop-prod" to="/darius">
            Darius
          </NavLink>
          <NavLink className="drop-prod" to="/closetmaid">
            Closetmaid
          </NavLink>
          <NavLink className="drop-prod" to="/ijoya">
            Ijoya
          </NavLink>
          <NavLink className="drop-prod" to="/pingree">
            Pingree
          </NavLink>{" "}
          <NavLink className="drop-prod" to="/ijoya">
            Ijoya
          </NavLink>
          <NavLink className="drop-prod" to="/aurora">
            Aurora
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const WallPaper = () => {
  return (
    <div className="drop-slow">
      <div className="header-color5"></div>
      <div className="wall-arts">
        <div className="drop-prod">
          <div className="ff">Featured Products</div>
          <div>Yadj's Cure</div>
          <div>Damask WallPaper</div>
          <div>Original WallPaper</div>
          <div>Black Stripe</div>
          <div>Silver Damask</div>
        </div>

        <div className="drop-prod">
          <div className="ff">Brands</div>
          <NavLink className="drop-prod" to="/darius">
            Darius
          </NavLink>
          <NavLink className="drop-prod" to="/danks">
            Danks
          </NavLink>
          <NavLink className="drop-prod" to="/versace">
            Versace
          </NavLink>
          <NavLink className="drop-prod" to="/pinnick">
            Pinnick
          </NavLink>
          <NavLink className="drop-prod" to="/windlane">
            WindLane
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Taxidermy = () => {
  return (
    <div className="drop-slow">
      <div className="header-color6"></div>
      <div className="wall-arts">
        <div className="drop-prod">
          <div className="ff">Featured Products</div>
          <div>Metal Decor</div>
          <div>Handmade Decor</div>
          <div>Faux Animals</div>
          <div>Danks Art</div>
          <div>Gazelle Art</div>
        </div>

        <div className="drop-prod">
          <div className="ff">Brands</div>
          <NavLink className="drop-prod" to="/darius">
            Darius
          </NavLink>
          <NavLink className="drop-prod" to="/danks">
            Danks
          </NavLink>
          <NavLink className="drop-prod" to="/krass">
            Krass
          </NavLink>
          <NavLink className="drop-prod" to="/jim">
            Jim
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
