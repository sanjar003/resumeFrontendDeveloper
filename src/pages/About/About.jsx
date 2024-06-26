import React from "react";
import styled from "styled-components";
import Asests from "../../Assets/webdev.svg";
import MySkills from "./MySkills";
import AboutImg from "../../Assets/Home.jpg";
import Footer from "../footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <Container>
        <BackgroundImg src={AboutImg} />

        <Divcontainer>
          <b>
            Мои навыки включают разработку веб-приложений
            <ins style={{ color: "red", fontSize: "22px " }}>
              использованиеREST API
            </ins>
            для обмена данными работу с системой контроля версий
            <ins style={{ color: "red", fontSize: "22px" }}>Git</ins> , создание
            компонентов с использованием библиотеки
            <ins style={{ color: "red", fontSize: "22px" }}>ReactJs</ins> , а
            также работу с различными фреймворками и библиотеками такими как
            <ins style={{ color: "red", fontSize: "22px" }}>Redux</ins> ,
            <ins style={{ color: "red", fontSize: "22px" }}>Mobx</ins> , и
            <ins style={{ color: "red", fontSize: "22px" }}>TRK Query,</ins> . Я
            также опытен в создании адаптивных интерфейсов с помощью
            <ins style={{ color: "red", fontSize: "22px" }}>CSS Modules</ins> ,
            и
            <ins style={{ color: "red", fontSize: "22px" }}>
              Styled Components
            </ins>
            . Кроме того я знаком с инструментами которые помогают в создании
            приложений такими как
            <ins style={{ color: "red", fontSize: "22px" }}>Docker</ins> ,
            <ins style={{ color: "red", fontSize: "22px" }}>
              Firebase и Axios,
            </ins>
            что позволяет мне разрабатывать более масштабируемые и быстрые
            приложения. В целом я считаю себя опытным
            <ins style={{ color: "red", fontSize: "22px" }}>Frontend</ins> ,
            разработчиком который всегда готов принять новые вызовы и научиться
            новым навыкам чтобы создавать качественные и инновационные
            <ins style={{ color: "red", fontSize: "22px" }}>веб-приложения</ins>
          </b>
        </Divcontainer>
        <DIVCOntainer>
          <img
            src={Asests}
            className="ImgFlter"
            alt="Web development"
            style={{ width: "100%", height: "70%" }}
          />
        </DIVCOntainer>
      </Container>

      <div style={{ paddingTop: "40px" }}>
        <h1>
          My <strong style={{ color: "red" }}>Skills</strong>
        </h1>
        <h2>
          <b style={{ fontSize: "25px", color: "black" }}>
            Полностью увидеть, какие навыки я имею и выполнять для разработки
            проектов для вас
          </b>
        </h2>
        <>
          <MySkills />
        </>
      </div>
      <br></br>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 60px;
  gap: 55px;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    align-content: flex-start;
    padding-top: 70px;
  }
`;
const BackgroundImg = styled.img`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  background-position: center;
  top: 0;

  @media (min-width: 830px) and (max-width: 980px) {
    display: none;
  }
`;
const Divcontainer = styled.div`
  width: 600px;
  height: 750px;
  color: white;
  text-align: center;
  font-size: 23px;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 320px;
    height: 430px;
    flex-wrap: wrap;
    font-size: 14px;
  }
`;

const DIVCOntainer = styled.div`
  width: 620px;
  height: 750px;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 320px;
    height: 380px;
  }
`;
export default About;
