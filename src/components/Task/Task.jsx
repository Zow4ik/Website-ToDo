import styles from './Task.module.scss'

const Task = (props) => {
  const {
    id,
    isComplete,
    text,
    changeIsCompleteTask,
  } = props

  return (
    <li className={styles.container} id={id}>
      <div className={styles.inputContainer}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={isComplete}
          onClick={() => changeIsCompleteTask(id)}
        />
        <p className={styles.text}>{text}</p>
      </div>
      <button className={styles.button}/>
    </li>
  )
}

export default Task