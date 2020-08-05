import React from 'react';

const Row = (props) => {
  return (
    <div
      className={`
        row 
        justify-content-${props.justify || 'center'}
        align-items-${props.align || 'center'}
      `}
    >
      {props.children}
    </div>
  )
}

export default Row;