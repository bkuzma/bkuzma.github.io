import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child {
    border: none;
  }
`;

const Agency = styled.h5`
  font-weight: normal;
  margin: 1.6875rem 0;
`;

export default ({
  agency,
  description,
  images,
  link,
  title
}) => (
  <Wrapper>
    <h4>{title}</h4>
    {agency &&
      <Agency>
        <strong>Agency:</strong> {agency}
      </Agency>
    }
    <p>{description}</p>
    {link &&
      <a href={link} target="_blank">visit site</a>
    }
    {images && images.map((image, index) => (
      <img src={image.src} key={index} />
    ))}
  </Wrapper>
);
