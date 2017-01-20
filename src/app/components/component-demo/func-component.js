import React from 'react';

export function Sample() {
  return (
    <div>
      <strong>Some text from function component</strong>
    </div>
  )
}

export function WithParams(props) {
  return (
    <div>
      <strong>{props.contentMessage}</strong>
    </div>
  )
}