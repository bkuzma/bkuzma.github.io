import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/media-queries';

export default ({
  agency,
  alignImageRight,
  description,
  images,
  link,
  title
}) => {
  const Agency = styled.h5`
    font-weight: normal;
    margin: 0 0 1.6875rem;
  `;

  const Images = styled.div`
    text-align: center;
    ${media.tablet`flex: 0 1 50%;`}
    ${media.desktop`flex-basis: 40%;`}
  `;

  const Meta = styled.div`
    ${media.tablet`
      display: flex;
      flex: 0 1 50%;
      flex-direction: column;
      justify-content: center;
      order: ${alignImageRight ? 0 : 1};
      padding-left: ${!alignImageRight ? 20 / 16 : 0}rem;
      padding-right: ${alignImageRight ? 20 / 16 : 0}rem;
    `}
    ${media.desktop`flex-basis: 60%;`}
  `;

  const Title = styled.h4`
    margin-top: 0;
  `;

  const Wrapper = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: ${60 / 16}rem auto 0;
    max-width: 1000px;
    padding: ${54 / 16}rem 0;
    &:last-child {
      border: none;
    }
    ${media.tablet`display: flex;`}
  `;

  return (
    <Wrapper>
      <Meta>
        <Title>{title}</Title>
        {agency &&
          <Agency>
            <strong>Agency:</strong> {agency}
          </Agency>
        }
        <p>{description}</p>
        {link &&
          <a href={link} target="_blank">visit site</a>
        }
      </Meta>
      <Images>
      {images && images.map((image, index) => (
        <img src={image.src} key={index} />
      ))}
      </Images>
  </Wrapper>
)};
