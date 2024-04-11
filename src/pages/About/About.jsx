import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Divcontainer>ere</Divcontainer>
      <DIVCOntainer>vewvw</DIVCOntainer>
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
  background: #303030;
`;
const Divcontainer = styled.div`
  width: 400px;
  height: 400px;
  background: red;
`;
const DIVCOntainer = styled.div`
  width: 400px;
  height: 400px;
  background: blue;
`;
export default About;
