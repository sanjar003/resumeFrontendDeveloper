import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h2>Designed by Sanjar</h2>
      <h2>Thank you © 2024 Sanjar</h2>
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
