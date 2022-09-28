import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  const renderProfficiencies = (start, end) => {
    return SkillBars.slice(start, end).map((skill, index) => {
      return (
        <div className="progress-info" key={skill.Stack}>
          <div className="progress-label">
            <span>{skill.Stack}</span>
          </div>
          <div className="progress-percentage">
            <span>{skill.progressPercentage}%</span>
          </div>
          <Progress
            max="100"
            value={skill.progressPercentage}
            color="info"
            role="progressbar"
            aria-label={skill.Stack}
          />
        </div>
      );
    });
  };
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6">
              <h1 className="h1">Proficiency</h1>
              {renderProfficiencies(0, 11)}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
              {renderProfficiencies(12)}
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
