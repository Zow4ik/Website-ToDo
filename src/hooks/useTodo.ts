import { useCallback, useMemo, useState } from 'react'
import { useDebounce } from './useDebounce.ts'
import { localStorageApi } from '../api/localStorageApi.ts'

export interface Task {
  id: string,
  text: string,
  isComplete: boolean,
}

const defaultTask: Task = {
  id: '1',
  text: 'заметка пример',
  isComplete: false
}

const useTodo = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const dataLocalStorage = localStorage.getItem('tasks')

    if (!dataLocalStorage) return [defaultTask]

    try {
      const dataLocalStorageParse:unknown = JSON.parse(dataLocalStorage)

      if ( Array.isArray(dataLocalStorageParse) ) {
        return dataLocalStorageParse as Task[]
      }
      return [defaultTask]

    } catch (error) {
      console.log('ошибка в парсинге задач - ', error)
      return [defaultTask]
    }
  })

  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = useMemo(() => {
    const searchQueryTrim = searchQuery.trim()

    return searchQueryTrim.length > 0
      ? tasks.filter((task) => task.text.includes(searchQueryTrim))
      : tasks
  }, [tasks, searchQuery])

  const debounceSetSearchQuery = useDebounce({
    callback: (value) => setSearchQuery(value)
  })

  const addTask = (event: React.SubmitEvent<HTMLFormElement>, text: string) => {
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

  const deleteTask = useCallback((id: string) => {
    setTasks((prevTasks) => {
      const newStateTasks = prevTasks.filter((task) => task.id !== id)
      localStorageApi.updateLocalStorage(newStateTasks)
      return newStateTasks
    })
  }, [])

  const changeIsCompleteTask = useCallback((id: string) => {
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