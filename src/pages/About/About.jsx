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
          Мои навыки включают разработку веб-приложений{" "}
          <ins>использованиеREST API</ins> для обмена данными работу с системой
          контроля версий Git, создание компонентов с использованием библиотеки{" "}
          <ins>ReactJs</ins> , а также работу с различными фреймворками и
          библиотеками такими как <ins>Redux</ins> ,<ins>Mobx</ins> , и
          <ins>TRK Query,</ins> . Я также опытен в создании адаптивных
          интерфейсов с помощью <ins>CSS Modules</ins> , и
          <ins>Styled Components</ins> . Кроме того я знаком с инструментами
          которые помогают в создании приложений такими как <ins>Docker</ins> ,
          <ins>Firebase и Axios,</ins> что позволяет мне разрабатывать более
          масштабируемые и быстрые приложения. В целом я считаю себя опытным
          <ins>Frontend</ins> , разработчиком который всегда готов принять новые
          вызовы и научиться новым навыкам чтобы создавать качественные и
          инновационные веб-приложения.
        </b>
      </Divcontainer>
      <DIVCOntainer>
        <img src={Asests} style={{ width: "570px", height: "530px" }} />
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
  width: 530px;
  height: 460px;

  font-size: 20px;
`;
const DIVCOntainer = styled.div`
  width: 570px;
  height: 530px;
`;
export default About;
