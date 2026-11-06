import styles from './Button.module.scss'

const Button = (props) => {
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