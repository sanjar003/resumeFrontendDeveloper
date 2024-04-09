import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Li>
        <a href="https://github.com/sanjar003">
          <AiFillGithub style={{ height: "39px", width: "39px" }} />
        </a>
      </Li>
      <Li>
        <a href="sanjarsamatov0306@gmail.com">
          <AiFillGoogleCircle style={{ height: "39px", width: "39px" }} />
        </a>
      </Li>
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
  background: content-box radial-gradient(crimson, skyblue);
  height: 90px;
  backdrop-filter: blur(7px);
  /* background: black; */
  color: white;
`;
const Li = styled.li`
  display: inline-block;
`;
export default Footer;
