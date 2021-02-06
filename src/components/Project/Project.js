import React from 'react';

import {
  Agency,
  Images,
  Meta,
  Title,
  Wrapper,
} from './styled';

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
          <a href={link} target="_blank" rel="noreferrer">visit site</a>
        }
      </Meta>
      <Images>
      {images && images.map((image, index) => (
        <img alt="Project Screenshot" src={image.src} key={index} />
      ))}
      </Images>
  </Wrapper>
);
