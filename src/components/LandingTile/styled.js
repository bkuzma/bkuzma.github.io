import styled from 'styled-components';

import Container from '../Container';
import { media } from '../../utils/media-queries';

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
