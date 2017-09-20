import React from 'react';
import styled, { keyframes } from 'styled-components';

import Container from './Container';
import ExternalLink from './ExternalLink';
import { media } from '../utils/media-queries';
import contact from '../data/contact';

const downUpAnimation = keyframes`
  0% {
    bottom: 10px;
  }
  50% {
    bottom: 0;
  }
  100% {
    bottom: 10px;
  }
`;

const Arrow = styled.div`
  animation: ${downUpAnimation} 0.6s 5s 4;
  bottom: 10px;
  cursor: pointer;
  font-size: ${30 / 16}rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) rotate(90deg);
`;

const Hand = styled.span`
  display: inline-block;
  transform: rotate(0deg);
  transition: transform 0.3s;
  ${props => props.isHovered &&
    'transform: rotate(-40deg);'
  };
`;

const Header = styled.h1`
  margin-top: 0;
`;

const Subheader = styled.h3`
  margin-top: 0;
`;

const Wrapper = Container.extend`
  align-items: center;
  background-color: lightsteelblue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  ${media.tablet`
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  `}
`;

export default class LandingTile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isHeaderHovered: false,
    };

    this.onHeaderMouseOver = this.onHeaderMouseOver.bind(this);
    this.onHeaderMouseOut = this.onHeaderMouseOut.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isHeaderHovered: true }), 1000);
    setTimeout(() => this.setState({ isHeaderHovered: false }), 2200);
  }

  onHeaderMouseOver() {
    this.setState({
      isHeaderHovered: true,
    });
  }

  onHeaderMouseOut() {
    this.setState({
      isHeaderHovered: false,
    });
  }

  renderLink(link) {
    return <ExternalLink {...link} />;
  }

  render() {
    const { onClickScroll } = this.props;
    const { isHeaderHovered } = this.state;

    const {
      email,
      gitHub,
      linkedIn,
    } = contact;

    return (
      <Wrapper>
        <Header
          onMouseEnter={this.onHeaderMouseOver}
          onMouseLeave={this.onHeaderMouseOut}
        >
          <Hand isHovered={isHeaderHovered}>
            ✌&#xFE0E;
          </Hand>
          ☺&#xFE0E;
        </Header>
        <Subheader>
          Hi, I'm a Front-End Web Engineer based in New York.
        </Subheader>
        <p>
          I build web applications using technologies like
          React, Redux, ES7, Webpack, and more.
        </p>
        <p>
          Find me on {this.renderLink(linkedIn)}, {this.renderLink(gitHub)}, or {this.renderLink(email)},
          or scroll down to see some recent work.
        </p>
        <Arrow onClick={onClickScroll}>
          ➝&#xFE0E;
        </Arrow>
      </Wrapper>
    );
  }
};
