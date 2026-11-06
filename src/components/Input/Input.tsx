import styles from './Input.module.scss'

interface InputProps {
  type: string,
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
      onInput={(event) => setValueInput(event.currentTarget.value)}
    />
  )
}

export default Input