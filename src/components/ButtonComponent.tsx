import './ButtonComponent.css';
import React from "react"

interface ButtonProps {
  variant: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={ props.onClick }
      className={ `btn ${props.variant}` }
      disabled={ props.disabled }
    >
      { props.children }
    </button>
  )
}

export default Button
