import styles from './Todo.module.scss'
import NewTask from '@/components/NewTask/NewTask.jsx'
import SearchTask from '@/components/SearchTask/SearchTask.jsx'
import StatusTask from '@/components/StatusTask/StatusTask.jsx'
import Tasks from '@/components/Tasks/Tasks.jsx'
import {useEffect, useState} from 'react'

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const dataLocalStorage = JSON.parse(localStorage.getItem('tasks'))

    if (!dataLocalStorage) {
      return [
        { id: 1, text: 'заметка пример', isComplete: false },
      ]
    }

    return dataLocalStorage
  })
  const [filteredTasks, setFilteredTasks] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const addTask = (event, text) => {
    event.preventDefault()
    const newStateTasks = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: text,
        isComplete: false,
      },
    ]

    localStorage.setItem('tasks', JSON.stringify(newStateTasks))
    setTasks(newStateTasks)
  }

  const deleteAllTasks = () => {
    if ( !confirm('вы уверены, что хотите удалить все заметки?') ) return

    localStorage.setItem('tasks', JSON.stringify([]))
    setTasks([])
  }

  const deleteTask = (id) => {
    const newStateTasks = tasks.filter((task) => task.id !== id)

    localStorage.setItem('tasks', JSON.stringify(newStateTasks))
    setTasks(newStateTasks)
  }

  const changeIsCompleteTask = (id) => {
    const newStateTasks =
      tasks.map((task) => (
        task.id === id
          ? { id: task.id, text: task.text, isComplete: !task.isComplete }
          : task
      ))

    localStorage.setItem('tasks', JSON.stringify(newStateTasks))
    setTasks(newStateTasks)
  }

  useEffect(() => {
    const searchQueryTrim = searchQuery.trim()

    setFilteredTasks(
      searchQueryTrim.length > 0
        ? tasks.filter((task) => task.text.includes(searchQueryTrim))
        : null
    )
  }, [tasks, searchQuery]);

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
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <StatusTask
        tasks={tasks}
        deleteAllTasks={deleteAllTasks}
      />
      <Tasks
        tasks={tasks}
        changeIsCompleteTask={changeIsCompleteTask}
        deleteTask={deleteTask}
        filteredTasks={filteredTasks}
      />
    </main>
  )
}

export default Todo