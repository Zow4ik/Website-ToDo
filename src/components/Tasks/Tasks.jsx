import styles from './Tasks.module.scss'
import Task from '@/components/Task/Task.jsx'

const Tasks = () => {
  return (
    <ul className={styles.list}>
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  )
}

export default Tasks