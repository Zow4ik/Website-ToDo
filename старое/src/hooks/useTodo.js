import { useCallback, useMemo, useState } from 'react'
import { useDebounce } from './useDebounce.js'
import { localStorageApi } from '../api/localStorageApi.js'

const useTodo = () => {
  const [tasks, setTasks] = useState(() => {
    const dataLocalStorage = JSON.parse(localStorage.getItem('tasks'))

    if (!dataLocalStorage) {
      return [
        { id: 1, text: 'заметка пример', isComplete: false },
      ]
    }

    return dataLocalStorage
  })

  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = useMemo(() => {
    const searchQueryTrim = searchQuery.trim()

    return searchQueryTrim.length > 0
      ? tasks.filter((task) => task.text.includes(searchQueryTrim))
      : null
  }, [tasks, searchQuery])

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

  return {
    tasks,
    addTask,
    searchQuery,
    debounceSetSearchQuery,
    deleteAllTasks,
    filteredTasks,
    changeIsCompleteTask,
    deleteTask,
  }
}

export { useTodo }