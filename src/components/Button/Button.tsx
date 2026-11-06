import styles from './Button.module.scss'
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode,
  type: "submit" | "reset" | "button",
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type,
  } = props

  return (
    <button
      type={type}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button