import React from 'react';
import styled from 'styled-components';

export default ({ onClickScroll }) => {

  const Arrow = styled.div`
    bottom: 40px;
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
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 0;
    padding: 20px;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
  `;

  const emailLink =
    <a
      href="mailto:hello@briankuzma.com"
      target="_blank">
      email
    </a>;

  const linkedInLink =
    <a
      href="https://www.linkedin.com/in/briankuzma/"
      target="_blank">
      LinkedIn
    </a>;

  const gitHubLink =
    <a
      href="https://github.com/bkuzma"
      target="_blank">
      GitHub
    </a>;

  return (
    <Wrapper>
      <Header>✌&#xFE0E; ☺&#xFE0E;</Header>
      <Subheader>
        I'm a Front-End Web Engineer based in New York.
      </Subheader>
      <p>
        I build web applications using technologies like
        React, Redux, ES7, Webpack, and more.
      </p>
      <p>
        Find me on {linkedInLink}, {gitHubLink},
        or {emailLink}.
      </p>
      <Arrow onClick={onClickScroll}>
        ➝&#xFE0E;
      </Arrow>
    </Wrapper>
  );
};
