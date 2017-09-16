import React from 'react';
import styled from 'styled-components';

import projects from '../data/projects';
import Project from '../components/Project';

const Header = styled.h3`
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: lavenderblush;
  overflow: auto;
  padding: 0 20px;
`;

export default () => (
  <Wrapper id="work">
    <Header>Here are some things I've worked on.</Header>
    <div>
      {projects.map((project, index) => (
        <Project {...project} key={index} alignImageRight={index % 2 === 0} />
      ))}
    </div>
  </Wrapper>
);
