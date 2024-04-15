import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyProject = () => {
  return (
    <Container>
      <a href="https://github.com/dashboard">
        <i class="bi bi-github"></i>
      </a>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  width: 100%;
  background: red;
  padding-top: 90px;
`;


export default MyProject;
