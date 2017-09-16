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

  const Subheader = styled.h2`
    margin: 0;
  `;

  const Wrapper = styled.div`
    align-items: center;
    background-color: papayawhip;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 20px;
  `;

  return (
    <Wrapper>
      <Header>✌&#xFE0E; ☺&#xFE0E;</Header>
      <Subheader>I'm a Front-End Web Engineer based in New York.</Subheader>
      <Arrow onClick={onClickScroll}>
        ➱&#xFE0E;
      </Arrow>
    </Wrapper>
  );
};
