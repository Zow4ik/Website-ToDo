import styles from './StatusTask.module.scss'

const StatusTask = () => {
  return (
    <div className={styles.container}>
      <p className={styles.sumTasks}>Total Tasks: {/* скока задач */}</p>
    </div>
  )
}

export default StatusTask