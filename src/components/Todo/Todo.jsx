import styles from './Todo.module.scss'
import NewTask from '@/components/NewTask/NewTask.jsx'
import SearchTask from '@/components/SearchTask/SearchTask.jsx'
import StatusTask from '@/components/StatusTask/StatusTask.jsx'
import Tasks from '@/components/Tasks/Tasks.jsx'
import {useCallback, useEffect, useState} from 'react'
import {localStorageApi} from '@/api/localStorageApi.js'
import {useDebounce} from '@/hooks/useDebounce.js'

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

  const debounceSetSearchQuery = useDebounce((value) => setSearchQuery(value))

  const addTask = (event, text) => {
    event.preventDefault()

    if (!text.trim().length) return

    const newStateTasks = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: text,
        isComplete: false,
      },
    ]

    localStorageApi.updateLocalStorage(newStateTasks)
    setTasks(newStateTasks)
  }

  const deleteAllTasks = useCallback(() => {
    if ( !confirm('вы уверены, что хотите удалить все заметки?') ) return

    localStorageApi.clearLocalStorage()
    setTasks([])
  }, [])

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => {
      const newStateTasks = prevTasks.filter((task) => task.id !== id)
      localStorageApi.updateLocalStorage(newStateTasks)
      return newStateTasks
    })
  }, [])

  const changeIsCompleteTask = useCallback((id) => {
    setTasks((prevTasks) => {
      const newStateTasks =
        prevTasks.map((task) => (
          task.id === id
            ? { id: task.id, text: task.text, isComplete: !task.isComplete }
            : task
        ))

      localStorageApi.updateLocalStorage(newStateTasks)
      return newStateTasks
    })
  }, [])

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
        setSearchQuery={debounceSetSearchQuery}
      />
      <StatusTask
        tasks={tasks}
        deleteAllTasks={deleteAllTasks}
        filteredTasks={filteredTasks}
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