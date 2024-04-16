import React from "react";
import './Footer.css'
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <Container>
      <a href="https://github.com/dashboard" >
        <i class="bi bi-github"></i>
      </a>
      <h2> © 2024 </h2>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: content-box radial-gradient(crimson, skyblue);
  height: 90px;
  backdrop-filter: blur(7px);
  color: white;
`;

export default Footer;
