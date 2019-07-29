import React from 'react';
import './NewQueryButton.css';

export const NewQueryButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
    >
      + new query
    </button>
  )
}
