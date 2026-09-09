import styles from './Task.module.scss'

const Task = () => {
  return (
    <li className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.checkbox}
          type='checkbox'
        />
        <p className={styles.text}>сделать корм асе</p>
      </div>
      <button className={styles.button}/>
    </li>
  )
}

export default Task