import styles from './Todo.module.scss'
import NewTask from '@/components/NewTask/NewTask.jsx'

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
    </main>
  )
}

export default Todo