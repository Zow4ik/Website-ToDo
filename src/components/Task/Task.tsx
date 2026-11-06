import styles from './Task.module.scss'
import { memo } from 'react'

interface TaskProps {
  id: string,
  isComplete: boolean,
  text: string,
  changeIsCompleteTask: (id: string) => void,
  deleteTask: (id: string) => void,
}

const Task = (props: TaskProps) => {
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
        type='button'
        className={styles.button}
        onClick={() => deleteTask(id)}
      />
    </li>
  )
}

export default memo(Task)