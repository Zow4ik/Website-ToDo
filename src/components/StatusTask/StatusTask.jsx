import styles from './StatusTask.module.scss'
import DeleteAllTasks from '@/components/DeleteAllTasks/DeleteAllTasks.jsx'

const StatusTask = (props) => {
  const {
    tasks,
  } = props

  return (
    <div className={styles.container}>
      <p className={styles.sumTasks}>Total Tasks: {tasks.length}</p>
      <DeleteAllTasks/>
    </div>
  )
}

export default StatusTask