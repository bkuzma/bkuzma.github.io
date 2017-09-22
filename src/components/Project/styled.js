import styled from 'styled-components';

import { media } from '../../utils/media-queries';

export const Agency = styled.h5`
    font-weight: normal;
    margin: 0 0 1.6875rem;
  `;

export const Images = styled.div`
  text-align: center;
  ${media.tablet`flex: 0 1 50%;`}
  ${media.desktop`flex-basis: 40%;`}
`;

export const Meta = styled.div`
  ${media.tablet`
    display: flex;
    flex: 0 1 50%;
    flex-direction: column;
    justify-content: center;
    order: ${props => props.alignImageRight ? 0 : 1};
    padding-left: ${props => !props.alignImageRight ? 20 / 16 : 0}rem;
    padding-right: ${props => props.alignImageRight ? 20 / 16 : 0}rem;
  `}
  ${media.desktop`flex-basis: 60%;`}
`;

export const Title = styled.h4`
  margin-top: 0;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: ${60 / 16}rem auto 0;
  max-width: 1000px;
  padding: ${54 / 16}rem 0;
  ${media.tablet`display: flex;`}
`;
