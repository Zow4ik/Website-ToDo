import styles from './Todo.module.scss'
import NewTask from '@/components/NewTask/NewTask.jsx'
import SearchTask from '@/components/SearchTask/SearchTask.jsx'
import StatusTask from '@/components/StatusTask/StatusTask.jsx'
import Tasks from '@/components/Tasks/Tasks.jsx'

const Todo = () => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>To Do List</h1>
      <NewTask
        typeInput='text'
        placeholderInput='New task title'
        typeButton='submit'
        textButton='Add'
      />
      <SearchTask
        typeInput='text'
        placeholderInput='Search task'
      />
      <StatusTask />
      <Tasks />
    </main>
  )
}

export default Todo