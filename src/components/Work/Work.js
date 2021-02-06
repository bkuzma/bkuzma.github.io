import React from 'react';

import {
  Header,
  Subheader,
  Wrapper,
} from './styled';
import projects from '../../data/projects';
import Project from '../Project';

export default () => (
  <Wrapper id="work">
    <Header>
      <span role="img" aria-label="Hand writing with pen">✍</span>&#xFE0E;
      <span role="img" aria-label="Smiley face">☺</span>&#xFE0E;
    </Header>
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
