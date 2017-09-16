import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import {scroller} from 'react-scroll';

import LandingTile from '../components/LandingTile';
import Work from '../components/Work';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1, h2, h3, h4, h5, h6 {
    color: hsla(0,0%,0%,1);
    font-weight: 700;
    line-height: 1.1;
    margin-top: ${54 / 16}rem 0 ${27 / 16}rem;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: ${32 / 16}rem;
  }
  h2 {
    font-size: ${24 / 16}rem;
  }
  h3 {
    font-size: ${21 / 16}rem;
  }
  a {
    border-bottom: 2px solid hsla(0,0%,0%,1);
    color: hsla(0,0%,0%,1);
    font-weight: 600;
    text-decoration: none;
  }
  p {
    line-height: 1.6;
    margin: 0 0 ${27 / 16}rem;
  }
  img {
    height: auto;
    max-width: 100%;
  }
`;

export default () => {

  const onClickScroll = function () {
    scroller.scrollTo('work', {
      duration: 600,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <div>
      <LandingTile onClickScroll={onClickScroll} />
      <Work />
    </div>
  );
};
