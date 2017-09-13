import React from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

const LandingTile = () => {

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

  return (
    <Wrapper>
      <Header>Brian Kuzma is a Front-End Engineer based in New York.</Header>
    </Wrapper>
  );
};

export default () => (
  <LandingTile />
);
