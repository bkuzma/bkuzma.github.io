import React from 'react';
import styled from 'styled-components';

import projects from '../data/projects';
import Project from '../components/Project';
import Container from '../components/Container';
import { media } from '../utils/media-queries';

const Header = styled.h1`
  text-align: center;
`;

const Subheader = styled.h3`
  margin-top: 0;
  text-align: center;
`;

const Wrapper = Container.extend`
  background-color: whitesmoke;
  overflow: auto;
  ${media.tablet`
    margin: 100vh 0 0;
  `}
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
