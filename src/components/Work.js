import React from 'react';
import styled from 'styled-components';

import projects from '../data/projects';
import Project from '../components/Project';

const Wrapper = styled.div`
  background-color: lavenderblush;
  overflow: auto;
  padding: 0 20px;
`;

export default () => (
  <Wrapper id="work">
    <h3>Selected Work</h3>
    <div>
      {projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  </Wrapper>
);
