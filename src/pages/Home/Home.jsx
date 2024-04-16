// import { Button } from "@mui/material";
import React from "react";
import "./Home.css";
import HOMEPNG from "../../Assets/Home.jpg";
// import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <div className="Container">
        <img
          src={HOMEPNG}
          alt="home pic"
          // className="img-fluid"
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
              <strong >Frontend</strong>
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
    </>
  );
};

export default Home;
