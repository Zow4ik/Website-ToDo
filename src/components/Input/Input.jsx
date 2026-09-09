import styles from './Input.module.scss'

const Input = (props) => {
  const {
    type,
    placeholder
  } = props

  return (
    <input
      maxLength='28'
      className={styles.input}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input