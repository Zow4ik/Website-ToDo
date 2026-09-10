import styles from './Todo.module.scss'
import NewTask from '@/components/NewTask/NewTask.jsx'
import SearchTask from '@/components/SearchTask/SearchTask.jsx'
import StatusTask from '@/components/StatusTask/StatusTask.jsx'
import Tasks from '@/components/Tasks/Tasks.jsx'
import {useState} from 'react'

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: '1 покормить асю 1', isComplete: false },
    { id: 2, text: '2 покормить асю 2', isComplete: true },
    { id: 3, text: '3 покормить асю 3', isComplete: true },
    { id: 4, text: '4 покормить асю 4', isComplete: false },
  ])

  const addTask = (event, text) => {
    event.preventDefault()

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: text,
        isComplete: false,
      },
    ])
  }

  const searchTasks = () => {
    console.log('searchTasks')
  }

  const deleteAllTasks = () => {
    if ( !confirm('вы уверены, что хотите удалить все заметки?') ) return

    setTasks([])
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  const changeIsCompleteTask = (id) => {
    setTasks(
      tasks.map((task) => (
        task.id === id
          ? { id: task.id, text: task.text, isComplete: !task.isComplete }
          : task
      ))
    )
  }

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>To Do List</h1>
      <NewTask
        typeInput='text'
        placeholderInput='New task title'
        typeButton='submit'
        textButton='Add'
        addTask={addTask}
      />
      <SearchTask
        typeInput='text'
        placeholderInput='Search task'
      />
      <StatusTask
        tasks={tasks}
        deleteAllTasks={deleteAllTasks}
      />
      <Tasks
        tasks={tasks}
        changeIsCompleteTask={changeIsCompleteTask}
        deleteTask={deleteTask}
      />
    </main>
  )
}

export default Todo