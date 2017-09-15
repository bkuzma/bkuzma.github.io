import React from 'react';
import styled from 'styled-components';

export default ({
  agency,
  description,
  images,
  link,
  title
}) => (
  <div>
    <h4>{title}</h4>
    <p>{description}</p>
    {link &&
      <a href={link} target="_blank">visit site</a>
    }
    {images && images.map(image => (
      <img src={image.src} />
    ))}
  </div>
);
