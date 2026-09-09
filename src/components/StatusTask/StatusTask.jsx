import styles from './StatusTask.module.scss'
import DeleteAllTasks from '@/components/DeleteAllTasks/DeleteAllTasks.jsx'

const StatusTask = () => {
  return (
    <div className={styles.container}>
      <p className={styles.sumTasks}>Total Tasks: {/* скока задач */}</p>
      <DeleteAllTasks/>
    </div>
  )
}

export default StatusTask