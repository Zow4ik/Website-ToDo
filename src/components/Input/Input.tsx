import styles from './Input.module.scss'
import type { ComponentProps } from "react";

interface InputProps {
  type: ComponentProps<'input'>["type"],
  placeholder: string,
  valueInput: string,
  setValueInput: (value: string) => void,
}

const Input = (props: InputProps) => {
  const {
    type,
    placeholder,
    valueInput,
    setValueInput,
  } = props

  return (
    <input
      maxLength={28}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={valueInput}
      onChange={(event) => setValueInput(event.currentTarget.value)}
    />
  )
}

export default Input