import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <AiFillGithub style={{ height: "39px", width: "39px" }}></AiFillGithub>
      <AiFillGoogleCircle
        style={{ height: "39px", width: "39px" }}
      ></AiFillGoogleCircle>
      <AiFillPhone style={{ height: "39px", width: "39px" }}></AiFillPhone>
      <FaTelegram style={{ height: "39px", width: "39px" }}></FaTelegram>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 90px;
  backdrop-filter: blur(7px);
  /* background: black; */
  color: white;
`;

export default Footer;
