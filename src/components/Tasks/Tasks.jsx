import styles from './Tasks.module.scss'
import Task from '@/components/Task/Task.jsx'

const Tasks = (props) => {
  const {
    tasks,
    changeIsCompleteTask,
    deleteTask,
  } = props

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <Task
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