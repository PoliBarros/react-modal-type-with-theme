import React from 'react';

const Button = ({ label, buttonAction, secondary }) => {
  return (
    <button className={secondary ? 'secondary' : 'primary'} key={label} onClick={buttonAction}>
      {label}
    </button>
  );
};
export default Button;
