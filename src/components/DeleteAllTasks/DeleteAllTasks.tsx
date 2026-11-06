import styles from './DeleteAllTasks.module.scss'
import { memo } from 'react'

interface DeleteAllTasksProps {
  deleteAllTasks: () => void
}

const DeleteAllTasks = ({deleteAllTasks}: DeleteAllTasksProps) => {
  return (
    <button
      type='button'
      className={styles.button}
      onClick={deleteAllTasks}
    >
      Delete All
    </button>
  )
}

export default memo(DeleteAllTasks)