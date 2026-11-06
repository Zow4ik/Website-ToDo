import styles from './StatusTask.module.scss'
import DeleteAllTasks from '../DeleteAllTasks/DeleteAllTasks.tsx'
import type { Task } from "@/hooks/useTodo.ts";

interface StatusTaskProps {
  tasks: Task[],
  deleteAllTasks: () => void,
  filteredTasks: null | Task[],
}

const StatusTask = (props: StatusTaskProps) => {
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