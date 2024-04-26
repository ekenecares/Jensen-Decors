import React, { useState, useEffect, useRef, useContext } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Product from "../../components/Product_data.js/Product";
import "./Home.css";
import Spans from "../../components/Text/Text";
import Shuffle from "../../components/Animation/AnimationTest";
import Carousel from "../../components/Slider/Carousel";
import { ShopContext } from "../../components/Context_Api/ContextApi";
import "swiper/css/effect-cards";
import CarouselHome from "../../components/Slider/CarouselHome";

const Home = (props) => {
  const { products } = useContext(ShopContext);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const write = "AURORA BRANDS".split("");
  const writer = "DARIUS BRANDS".split("");


  const COLORS = [
    "rgba(103, 1, 108, 0.382)",
    "rgba(255, 100, 120, 0.302)",
    "rgba(1, 13, 194, 0.322)",
    "rgba(194, 194, 1, 0.352)",
    "rgba(14, 194, 1, 0.352)",
    "rgba(22, 255, 255, 0.352)",
  ];

  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      duration: 28,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(900% 150% at 50% 110%,  rgba(23, 18, 18, 0.982) 50%, ${color})`;

  return (
    <div className="home">
      <div className="hero-center">
        <section className="hero-page">
          <div className="homeo">
            <motion.div style={{ backgroundImage }} className="colored">
              <div className="stars1">
                <Canvas>
                  <Stars
                    count={600}
                    speed={2}
                    saturation={2}
                    factor={1}
                    radius={9}
                  />
                </Canvas>
              </div>
            </motion.div>

            <div className="slider">
              <CarouselHome />
            </div>

            <div className="homeText">
              <div className="homeFlex">
                <div>
                  <span>J</span>
                  <span>E</span>
                  <span>N</span>
                  <span>S</span>
                  <span>E</span>
                  <span>N</span>
                </div>
                <div>
                  <span>D</span>
                  <span>E</span>
                  <span>C</span>
                  <span>O</span>
                  <span>R</span>
                  <span>S</span>
                </div>
              </div>
              <div className="home-line">
                <div className="underline">
                  <img src="images/underline.png" />
                </div>
              </div>
            </div>

            <div className="home-text">
              <div className="home-texter">
                <h3>
                  Welcome to Jensen Decors we produce, here we sell and provide
                  indoor decorations to beautify your homes & offices, we offer
                  our services after purchases such as installing your
                  decorations and fixing damaged products, modelling and custom
                  manufacturing to client's demands, wall arts, mirrors,
                  shelves, wall papers & wall mounted animals.enhancing indoor
                  spaces is our passion at Jensen Decors! we strive to offer
                  comprehensive services to ensure your home reflects your
                  unique style and personality.
                </h3>
              </div>
            </div>

            <div className="home-text2">
              <div className="home-texter2">
                <h3>
                  Welcome to Jensen Decors we produce, here we sell and provide
                  indoor decorations to beautify your homes & offices, we offer
                  our services after purchases such as installing your
                  decorations and fixing damaged products, modelling and custom
                  manufacturing to client's demands which fufilling them remains
                  our passion at Jensen Decors!
                </h3>
              </div>
            </div>

            <button className="home-button"  onClick={()=>navigate("/category/frame")}>
              {" "}
              <h3>Shop</h3>
            </button>
          </div>

          <div className="under-hero">
            <motion.div className="hero-first" style={{ backgroundImage }}>
              <div className="hero-first2">
                <div className="rate2">
                  <div className="zig-zag">
                    {" "}
                    <img src="images/zigzag.png" />
                  </div>

                  <div className="zig-zag2">
                    {" "}
                    <img src="images/zigzag1.png" />
                  </div>

                  <div className="zig-zag2">
                    {" "}
                    <img src="images/zigzag1.png" />
                  </div>

                  <div className="zig-zag2">
                    {" "}
                    <img src="images/zigzag1.png" />
                  </div>

                  <div className="write-up">
                    <h2 className="write1">WHAT DO WE DO ?</h2>
                    <h4 className="write2">
                      We are indoor decoration corporation that have deal with
                      departmental brand handling, each brand focuses on
                      individual products and interior design aspects we also
                      offer extra services
                    </h4>
                    <div className="write-flex">
                      <div className="write-img">
                        <img src="images/sgelf.jpg" />
                      </div>
                      <div className="write-img">
                        <img src="images/framef.webp" />
                      </div>
                      <div className="write-img">
                        <img src="images/antler.jpeg" />
                      </div>
                      <div className="write-img">
                        <img src="images/ender.webp" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-first1">
                <div className="stars2">
                  <Canvas>
                    <Stars
                      count={500}
                      speed={2}
                      saturation={4}
                      factor={0.7}
                      radius={6}
                    />
                  </Canvas>
                </div>{" "}
                <div className="rate1">
                  <img src="images/framer4.png" className="u-hero-" />
                  <h3 className="u-name"> Mirror art</h3>
                </div>
                <div className="rate1">
                  {" "}
                  <img src="images/framer2.png" className="u-hero" />
                  <h3 className="u-name">Wall Mount</h3>
                </div>
                <div className="rate1">
                  {" "}
                  <img src="images/framer3.png" className="u-hero" />
                  <h3 className="u-name">Metal Wall Art</h3>
                </div>
                <div className="rate1 remove-img">
                  {" "}
                  <img src="images/framer.png" className="u-hero" />
                  <h3 className="u-name"> Shelves</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <section className="toxic2">
        <div className="stars3">
          {" "}
          <Canvas>
            <Stars
              count={600}
              speed={2}
              saturation={3}
              factor={0.7}
              radius={9}
            />
          </Canvas>
        </div>
        <motion.div className="tox2" style={{ backgroundImage }}>
          {writer.map((letter, index) => {
            return (
              <Spans className="spanner" key={index}>
                {letter === " " ? "\u00A0" : letter}
              </Spans>
            );
          })}
        </motion.div>
      </section>

      <section className="full-sect">
        <div className="full-enclose">
          <div className="full-section">
            <div className="best-of">
              {" "}
              <h2> INDOOR AESTHETICS</h2>
              <div className="underline2">
                <img src="images/underline2.png" />
              </div>
            </div>
            <section className="mini-category">
              <div className="filterer">
                <div className="fill-first">
                  <div className="category-name">
                    <h3>Category</h3>
                  </div>
                  <div className="fill1">
                    <div className="yee">
                      <div className="zee">
                        <img src="images/caterg.webp" />
                      </div>
                      <div className="fill-desc">
                        <h4>Metal Wall Art</h4>
                        <h5 className="totaled">4 items</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fill2">
                  <div className="category-fillter">
                    <li onClick={() => navigate("")}>
                      <a className="aee">All</a>
                    </li>
                    <li onClick={() => navigate("")}>
                      <a>Wall Mount</a>
                    </li>
                  </div>

                  <div className="vee">
                    <div className="banshee">
                      {products.map((product, i) => {
                        if (product.begin) {
                          return (
                            <Product
                            key={i}
                              {...product}
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="best">
              <div className="great">
                <div className=" greater">
                  {products.map((product, i) => {
                    if (product.categs) {
                      return (
                        <Product
                          {...product}
                        />
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </section>{" "}
          </div>
        </div>
      </section>

      <section className="toxic">
        <div className="stars3">
          {" "}
          <Canvas>
            <Stars
              count={600}
              speed={2}
              saturation={3}
              factor={0.7}
              radius={9}
            />
          </Canvas>
        </div>
        <motion.div className="tox" style={{ backgroundImage }}>
          {write.map((letter, index) => {
            return (
              <Spans className="spanner" key={index}>
                {letter === " " ? "\u00A0" : letter}
              </Spans>
            );
          })}
        </motion.div>
      </section>

      <section className="shuffle-section">
        <div className="shuffle">
          <Shuffle />
        </div>
      </section>

      <section className="next-first">
        <section className="best-first">
          <div className="best-header">
            <h2>WALL PAPERS & INTERIOR </h2>
            <div className="underline3">
              <img src="images/underline2.png" />
            </div>
          </div>
          <div className="next-div">
            <div className=" next-div-under">
              {products.map((product, i) => {
                if (product.cake) {
                  return (
                    <Product
                      {...product}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </section>
        {/* <section className="best">
          <div className="great">
            <div className=" greater">
              {products.map((product, i) => {
                if (product.new) {
                  return (
                    <Product
                      id={product.id}
                      image={product.url}
                      name={product.title}
                      price={product.priceCents}
                      discount={product.discount}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </section> */}

        <section className="carousel-section">
        <Carousel />
      </section>
      </section>

      {/* <section className="ceezar">
        <div className="grand">
          <div className="terrific">
            <div className="bravo">
              <img src="/images/animal mount.jpeg" />
            </div>
            <div className="wow">
              <div className="wower">
                <div className="wowed">
                  <div className="craze">
                    <h3>Wall Mounted Displays</h3>
                    <h4>
                      Using the message bar underneath, clients can send the
                      required specs needed for the creation of your specific
                      wall animals, these details must state the color, material
                      and the requests must be understable and reasonable.
                    </h4>
                  </div>
                  <div className="amaze">
                    <div className="fantastic1 f1">
                      {" "}
                      <img src="images/metal-animal.jpeg" />
                      <h4>Bronze Mounted Axis</h4>
                      <h5 className="prices">$160</h5>
                    </div>
                    <div className="fantastic f2">
                      {" "}
                      <img src="images/omo.jpg" />
                      <h4>Bronze Mounted Axis</h4>
                      <h5 className="prices">$130</h5>
                    </div>
                    <div className="fantastic f3">
                      {" "}
                      <img src="images/moo.jpeg" />
                      <h4>Bronze Mounted Axis</h4>
                      <h5 className="prices">$120</h5>
                    </div>
                  </div>
                  <div className="form">
                    <input type="email" placeholder=""></input>
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;

// export default Slider;
