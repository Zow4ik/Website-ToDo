import styles from './Task.module.scss'
import { memo } from 'react'

const Task = (props) => {
  const {
    id,
    isComplete,
    text,
    changeIsCompleteTask,
    deleteTask,
  } = props

  return (
    <li
      className={styles.container}
      id={id}
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={isComplete}
          onChange={() => changeIsCompleteTask(id)}
        />
        <p className={styles.text}>{text}</p>
      </div>
      <button
        className={styles.button}
        onClick={() => deleteTask(id)}
      />
    </li>
  )
}

export default memo(Task)