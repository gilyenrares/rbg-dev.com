import React, { ButtonHTMLAttributes } from 'react'
import './Button.css';

type ButtonProps = {
  className: any
  children: any
  type: any
  onClick: React.MouseEventHandler
  buttonStyle: string
  buttonSize: string
}

const STYLES = ['btn--primary', 'btn--secondary', 'btn--success', 'btn--danger', 'btn--warning', 'btn--info', 'btn--light', 'btn--dark'];

const SIZES = ['btn--small', 'btn--medium', 'btn--large', 'btn--wide'];


const Button = ({ children,
  type,
  onClick,
  buttonStyle,
  buttonSize }: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn--custom ${checkButtonStyle} ${checkButtonSize} `}
      onClick={onClick}
      type={type}
    ><span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  )
}

export default Button