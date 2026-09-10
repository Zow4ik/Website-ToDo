import styles from './Input.module.scss'

const Input = (props) => {
  const {
    type,
    placeholder,
    valueInput,
    setValueInput,
  } = props

  return (
    <input
      maxLength='28'
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={valueInput}
      onInput={(event) => setValueInput(event.target.value)}
    />
  )
}

export default Input