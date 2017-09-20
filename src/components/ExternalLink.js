import React from 'react';

export default ({ label, url }) => (
  <a
    href={url}
    target="_blank">
    {label}
  </a>
);
