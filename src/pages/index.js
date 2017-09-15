import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import {scroller} from 'react-scroll';

import LandingTile from '../components/LandingTile';
import Work from '../components/Work';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
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
