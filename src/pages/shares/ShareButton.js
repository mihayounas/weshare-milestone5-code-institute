import React from 'react';

function ShareButton({ postId, onClick }) {
  return (
    <button type="button" onClick={() => onClick(postId)}>
      Share
    </button>
  );
}

export default ShareButton;