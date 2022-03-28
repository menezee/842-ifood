import React from 'react';

function Block({ children, centralized = false }) {
  const centralizedStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const style = {
    maxHeight: '80vh',
    maxWidth: '80vw',
    ...(centralized ? centralizedStyle : null),
  };

  return (
    <div style={style}>
      { children }
    </div>
  );
}

function Image({ src, height, width }) {
  const style = {
    height,
    width,
  };

  return (
    <img src={src} style={style} alt="something meaningful" />
  );
}

export {
  Block,
  Image,
};
