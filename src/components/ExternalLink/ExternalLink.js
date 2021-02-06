import React from 'react';

export default ({ label, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {label}
  </a>
);
