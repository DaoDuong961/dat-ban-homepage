import React from 'react';
import "./button.css"

interface Props {
  color?: string,
  backgroundColor?: string,
  name?: string,
}
const Button = (props: Props) => {
  return (
  <button className="btn--black" style={{color:props.color, background: props.backgroundColor}}>{props.name}</button>
  );
}
export default Button;