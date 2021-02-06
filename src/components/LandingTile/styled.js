import styled, { keyframes } from 'styled-components';

import Container from '../Container';
import { media } from '../../utils/media-queries';

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

export const Arrow = styled.div`
  animation: ${downUpAnimation} 0.6s 5s 4;
  bottom: 10px;
  cursor: pointer;
  font-size: ${30 / 16}rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) rotate(90deg);
`;

export const Hand = styled.span`
  display: inline-block;
  transform: rotate(0deg);
  transition: transform 0.3s;
  ${props => props.isHovered &&
    'transform: rotate(-40deg);'
  };
`;

export const Header = styled.h1`
  margin-top: 0;
`;

export const Subheader = styled.h3`
  margin-top: 0;
`;

export const Wrapper = styled(Container)`
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
