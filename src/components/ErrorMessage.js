import React from 'react';

export default function ErrorMessage(props){
  const { message } = props;

  return (
    <div>
      <p>Ooops... {message}</p>
    </div>
  )
}