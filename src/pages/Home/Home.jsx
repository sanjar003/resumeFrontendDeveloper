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
          // className="img-fluid"
          style={{
            maxHeight: "800px",
            position: "fixed",
            zIndex: "-99",
            width: "100%",
            backgroundPosition:"center",
            top:"3px",
          }}
        />
        <div className="containerText ">
          <h1 className="text">
          Hello 👋🏻,
          </h1>
          <h1 className="text2">
            Санжар Саматов Frontend <h1 className="text3">разработчик</h1>
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

      {/* <Button variant="contained">Contained</Button> */}
    </>
  );
};

export default Home;
