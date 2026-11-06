import styles from './Tasks.module.scss'
import TaskComponent from '../Task/Task.tsx'
import type { Task } from "@/hooks/useTodo.ts";

interface TasksProps {
  tasks: Task[],
  changeIsCompleteTask: (id: string) => void,
  deleteTask: (id: string) => void,
  filteredTasks: Task[],
}

const Tasks = (props: TasksProps) => {
  const {
    tasks,
    changeIsCompleteTask,
    deleteTask,
    filteredTasks,
  } = props

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <TaskComponent
          key={task.id}
          id={task.id}
          isComplete={task.isComplete}
          text={task.text}
          changeIsCompleteTask={changeIsCompleteTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}

export default Tasks