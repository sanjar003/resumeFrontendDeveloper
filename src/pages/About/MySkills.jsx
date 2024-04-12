import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiCss3,
  DiGit,
  DiGithub,
  DiHtml5,
} from "react-icons/di";
import { FaSass } from "react-icons/fa";
import {
  SiFirebase,
  SiFigma,
  SiRedux,
  SiTypescript,
  SiAdobephotoshop,
} from "react-icons/si";
import styled from "styled-components";

function MySkills() {
  return (
    <Container>
      <>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
        </ChildrenCOntainer>

        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiRedux />
          </Col>
        </ChildrenCOntainer>

        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiFigma />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiTypescript />
          </Col>
        </ChildrenCOntainer>
        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <FaSass />
          </Col>
        </ChildrenCOntainer>

        <ChildrenCOntainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiAdobephotoshop />
          </Col>
        </ChildrenCOntainer>
      </>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 38px;
  flex-wrap:wrap;
  font-size: 90px;
`;
const ChildrenCOntainer =styled.div`
width: 129px;
height: 115px;
font-size: 103px;
border: 2px solid black;
text-align: center;
`
export default MySkills;
