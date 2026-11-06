import styles from './StatusTask.module.scss'
import DeleteAllTasks from '../DeleteAllTasks/DeleteAllTasks.jsx'

const StatusTask = (props) => {
  const {
    tasks,
    deleteAllTasks,
    filteredTasks,
  } = props

  return (
    <div className={styles.container}>
      <p className={styles.sumTasks}>
        Total Tasks:
        { filteredTasks ? filteredTasks.length : tasks.length }
      </p>
      <DeleteAllTasks deleteAllTasks={deleteAllTasks}/>
    </div>
  )
}

export default StatusTask