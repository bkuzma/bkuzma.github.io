import styled from 'styled-components';

import Container from '../Container';
import { media } from '../../utils/media-queries';

const Header = styled.h1`
  text-align: center;
`;

const Subheader = styled.h3`
  margin-top: 0;
  text-align: center;
`;

const Wrapper = Container.extend`
  background-color: whitesmoke;
  overflow: auto;
  ${media.tablet`
    margin: 100vh 0 0;
  `}
`;
