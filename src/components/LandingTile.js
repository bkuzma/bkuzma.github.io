import React from 'react';
import styled from 'styled-components';

import Chevron from '../components/Chevron';

export default ({ onClickScroll }) => {

  const Wrapper = styled.div`
    align-items: center;
    background-color: papayawhip;
    display: flex;
    height: 100vh;
    justify-content: center;
    padding: 20px;
  `;

  const Header = styled.h2`
    margin: 0;
  `;

  const ChevronContainer = styled.div`
    bottom: 40px;
    cursor: pointer;
    fill: #000;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  `;

  return (
    <Wrapper>
      <Header>Brian Kuzma is a Front-End Engineer based in New York.</Header>
      <ChevronContainer onClick={onClickScroll}>
        <Chevron />
      </ChevronContainer>
    </Wrapper>
  );
};
