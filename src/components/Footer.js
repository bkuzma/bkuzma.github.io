import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media-queries';
import Container from './Container';

const Wrapper = Container.extend`
  background-color: whitesmoke;
  padding-bottom: ${30 / 16}rem;
  padding-top: ${30 / 16}rem;
`;

export default () => (
  <Wrapper>
    <small>
      Built with&nbsp;
      <a href="https://facebook.github.io/react/" target="_blank">React</a>,&nbsp;
      <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>, and&nbsp;
      <a href="https://www.styled-components.com/" target="_blank">styled-components</a>
    </small>
  </Wrapper>
);
