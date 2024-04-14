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
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
        </ChildrenContainer>

        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiRedux />
          </Col>
        </ChildrenContainer>

        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiFigma />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiTypescript />
          </Col>
        </ChildrenContainer>
        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <FaSass />
          </Col>
        </ChildrenContainer>

        <ChildrenContainer>
          <Col xs={4} md={2} className="tech-icons">
            <SiAdobephotoshop />
          </Col>
        </ChildrenContainer>
      </>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38px;
  flex-wrap: wrap;
  font-size: 90px;
`;
const ChildrenContainer = styled.div`
  width: 159px;
  height: 149px;
  cursor: pointer;
  font-size: 1.5em;
  border: 2px solid black;
  text-align: center;

  &:hover {
    box-shadow:
  2.3px 2.3px 1.9px rgba(0, 0, 0, 0.248),
  5.4px 5.4px 4.3px rgba(0, 0, 0, 0.289),
  9.7px 9.7px 7.7px rgba(0, 0, 0, 0.312),
  16.1px 16.1px 12.8px rgba(0, 0, 0, 0.328),
  26.5px 26.5px 21.2px rgba(0, 0, 0, 0.34),
  46.2px 46.2px 37px rgba(0, 0, 0, 0.351),
  100px 100px 80px rgba(0, 0, 0, 0.36)
;
    border: 1.9px solid white;
    /* transform: translate(1px, 1px);  */
    transition-delay:'2s'
    
    }
`;

export default MySkills;
