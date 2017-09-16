import React from 'react';
import styled from 'styled-components';

import projects from '../data/projects';
import Project from '../components/Project';

const Header = styled.h1`
  text-align: center;
`;

const Subheader = styled.h3`
  margin-top: 0;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: whitesmoke;
  margin: 100vh 0 0;
  overflow: auto;
  padding: 0 20px;
  position: relative;
`;

export default () => (
  <Wrapper id="work">
    <Header>✍&#xFE0E;☺&#xFE0E;</Header>
    <Subheader>
      Here are some projects I've worked on.
    </Subheader>
    <div>
      {projects.map((project, index) => (
        <Project {...project} key={index} alignImageRight={index % 2 === 0} />
      ))}
    </div>
  </Wrapper>
);
