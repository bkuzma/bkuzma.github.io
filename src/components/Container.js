import styled from 'styled-components';

import { media } from '../utils/media-queries';

export default styled.div`
  padding-left: ${20 / 16}rem;
  padding-right: ${20 / 16}rem;
  position: relative;
  ${media.tablet`
    padding-left: ${40 / 16}rem;
    padding-right: ${40 / 16}rem;
  `}
`;
