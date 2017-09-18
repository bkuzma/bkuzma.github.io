import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { scroller } from 'react-scroll';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
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
      <Helmet>
        <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
        <link rel="manifest" href="favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <LandingTile onClickScroll={onClickScroll} />
      <Work />
      <Footer />
    </div>
  );
};
