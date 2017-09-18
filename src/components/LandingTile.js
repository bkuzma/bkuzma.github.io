import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media-queries';
import contact from '../data/contact';

export default ({ onClickScroll }) => {

  const Arrow = styled.div`
    bottom: 10px;
    cursor: pointer;
    fill: #000;
    font-size: ${30 / 16}rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%) rotate(90deg);
  `;

  const Header = styled.h1`
    margin-top: 0;
  `;

  const Subheader = styled.h3`
    margin-top: 0;
  `;

  const Wrapper = styled.div`
    align-items: center;
    background-color: lightsteelblue;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 20px;
    text-align: center;
    ${media.tablet`
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
    `}
  `;

  const {
    email,
    gitHub,
    linkedIn,
  } = contact;

  const emailLink =
    <a
      href={email.url}
      target="_blank">
      {email.label}
    </a>;

  const linkedInLink =
    <a
      href={linkedIn.url}
      target="_blank">
      {linkedIn.label}
    </a>;

  const gitHubLink =
    <a
      href={gitHub.url}
      target="_blank">
      {gitHub.label}
    </a>;

  return (
    <Wrapper>
      <Header>✌&#xFE0E; ☺&#xFE0E;</Header>
      <Subheader>
        Hi, I'm a Front-End Web Engineer based in New York.
      </Subheader>
      <p>
        I build web applications using technologies like
        React, Redux, ES7, Webpack, and more.
      </p>
      <p>
        Find me on {linkedInLink}, {gitHubLink},
        or {emailLink}, or scroll down to see some recent work.
      </p>
      <Arrow onClick={onClickScroll}>
        ➝&#xFE0E;
      </Arrow>
    </Wrapper>
  );
};
