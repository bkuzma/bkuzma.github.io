import React from 'react';
import styled from 'styled-components';

import {
  Agency,
  Images,
  Meta,
  Title,
  Wrapper,
} from './styled';
import { media } from '../../utils/media-queries';

export default ({
  agency,
  alignImageRight,
  description,
  images,
  link,
  title
}) => (
    <Wrapper>
      <Meta alignImageRight={alignImageRight}>
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
);
