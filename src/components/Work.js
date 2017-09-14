import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project';

const Wrapper = styled.div`
  background-color: lavenderblush;
  overflow: auto;
  padding: 0 20px;
`;

const projects = [
  {
    agency: 'R/GA',
    description: 'blah blah blah',
    images: [],
    link: null,
    title: 'Samsung Rihanna'
  },
  {
    agency: 'Huge',
    description: 'blah blah blah',
    images: [],
    link: null,
    title: 'Hugeinc.com'
  }
];

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
