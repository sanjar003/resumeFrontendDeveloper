// import { Button } from "@mui/material";
import React from "react";
import "./Home.css";
import HOMEPNG from "../../Assets/Home.jpg";

const Home = () => {
  return (
    <>
      <div className="Container">
        <img
          src={HOMEPNG}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "680px", position: "fixed", zIndex:"-99", width:"100%", scrollbarColor:'none' }}
        />
        <div className="containerText ">
          <h2 className="text">Hello 👋🏻, </h2>
          <h2>
            Санжар Саматов Frontend <h2>разработчик</h2>
          </h2>
        </div>
        <div>
          <img
            src="https://vartulz.com/wp-content/uploads/2021/04/Asset-1@4x-1.png"
            width="590px"
            height="400px"
          />
        </div>
      </div>

      {/* <Button variant="contained">Contained</Button> */}
    </>
  );
};

export default Home;
