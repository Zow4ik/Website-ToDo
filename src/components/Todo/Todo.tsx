import styles from './Todo.module.scss'
import NewTask from '../NewTask/NewTask.tsx'
import SearchTask from '../SearchTask/SearchTask.tsx'
import StatusTask from '../StatusTask/StatusTask.tsx'
import Tasks from '../Tasks/Tasks.tsx'
import { useTodo } from '@/hooks/useTodo.ts'

const Todo = () => {
  const {
    tasks,
    addTask,
    searchQuery,
    debounceSetSearchQuery,
    deleteAllTasks,
    filteredTasks,
    changeIsCompleteTask,
    deleteTask,
  } = useTodo()

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