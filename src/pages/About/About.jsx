import React from "react";
import styled from "styled-components";
import AboutImg from "../../Assets/Home.jpg";
import Asests from "../../Assets/webdev.svg";

const About = () => {
  return (
    <Container>
      <img
        src={AboutImg}
        style={{
          maxHeight: "800px",
          position: "fixed",
          zIndex: "-9",
          width: "100%",
          backgroundPosition: "center",
          top: "3px",
        }}
      />
      <Divcontainer>
        <b>
          Мои навыки включают разработку веб-приложений
          <ins style={{ color: "red", fontSize: "22px " }}>
            использованиеREST API
          </ins>
          для обмена данными работу с системой контроля версий{" "}
          <ins style={{ color: "red", fontSize: "22px" }}>Git</ins> , создание
          компонентов с использованием библиотеки{" "}
          <ins style={{ color: "red", fontSize: "22px" }}>ReactJs</ins> , а
          также работу с различными фреймворками и библиотеками такими как{" "}
          <ins style={{ color: "red", fontSize: "22px" }}>Redux</ins> ,
          <ins style={{ color: "red", fontSize: "22px" }}>Mobx</ins> , и
          <ins style={{ color: "red", fontSize: "22px" }}>TRK Query,</ins> . Я
          также опытен в создании адаптивных интерфейсов с помощью
          <ins style={{ color: "red", fontSize: "22px" }}>CSS Modules</ins> , и
          <ins style={{ color: "red", fontSize: "22px" }}>
            Styled Components
          </ins>
          . Кроме того я знаком с инструментами которые помогают в создании
          приложений такими как{" "}
          <ins style={{ color: "red", fontSize: "22px" }}>Docker</ins> ,
          <ins style={{ color: "red", fontSize: "22px" }}>
            Firebase и Axios,
          </ins>{" "}
          что позволяет мне разрабатывать более масштабируемые и быстрые
          приложения. В целом я считаю себя опытным
          <ins style={{ color: "red", fontSize: "22px" }}>Frontend</ins> ,
          разработчиком который всегда готов принять новые вызовы и научиться
          новым навыкам чтобы создавать качественные и инновационные
          <ins style={{ color: "red", fontSize: "22px" }}>веб-приложения</ins>.
        </b>
      </Divcontainer>
      <DIVCOntainer>
        <img src={Asests} style={{ width: "620px", height: "580px" }} />
      </DIVCOntainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
  flex-wrap: wrap;
  gap: 55px;
`;
const Divcontainer = styled.div`
  width: 570px;
  height: 460px;
  color: white;
  text-align: center;
  font-size: 21px;
`;
const DIVCOntainer = styled.div`
  width: 620px;
  height: 580px;
`;
export default About;
