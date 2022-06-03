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

function Square({ children }) {
  return (
    <div style={{
      minHeight: '150px',
      height: 'fit-content',
      width: '150px',
      border: '1.5px solid black',
      overflow: 'hidden',
      padding: '2px',
      fontFamily: 'Georgia'
    }}>
      {children}
    </div>
  );
}

export {
  Block,
  Image,
  Square,
};
