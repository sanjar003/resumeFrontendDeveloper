// import { Button } from "@mui/material";
import React from "react";
import "./Home.css";
import HOMEPNG from "../../Assets/Home.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Html from "../../Assets/html.png";
import cssIcons from "../../Assets/css.png";
import gitHub from "../../Assets/github.svg";
import Js from "../../Assets/js.png";
import Reacct from "../../Assets/react.png";
import Sass from "../../Assets/sass.png";
import Footer from "../footer/Footer";

// import Footer from "../footer/Footer";
const Home = () => {
  const slideImages = [
    {
      img: Html,
      index: 1,
    },
    {
      img: cssIcons,
      index: 2,
    },
    {
      img: gitHub,
      index: 3,
    },
    {
      img: Js,
      index: 4,
    },
    {
      img: Reacct,
      index: 5,
    },
    {
      img: Sass,
      index: 6,
    },
  ];
  return (
    <>
      <div className="Container">
        <img
          src={HOMEPNG}
          alt="home pic"
          style={{
            maxHeight: "100%",
            position: "fixed",
            zIndex: "-99",
            width: "100%",
            backgroundPosition: "center",
            top: "3px",
          }}
        />
        <div className="containerText ">
          <h1 className="text">Hello 👋🏻,</h1>
          <h1 className="text2">
            Санжар Саматов
            <ins style={{ color: "red" }}>
              <strong>Frontend</strong>
            </ins>
            <h1 className="text3">разработчик</h1>
          </h1>
        </div>
        <div>
          <img
            src="https://vartulz.com/wp-content/uploads/2021/04/Asset-1@4x-1.png"
            width="590px"
            height="400px"
          />
        </div>
      </div>

      {/* slider */}
      <div className="slider-container">
        <Slider>
          {slideImages.map((slide, index) => (
            <div key={index} className="divContainer">
              <img
                src={slide.img}
                alt={`Slide ${slide.index}`}
                style={{
                  width: "400px",
                  height: "340px",
                  paddingLeft: "26%",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Footer  />
    </>
  );
};

export default Home;
