import styles from './DeleteAllTasks.module.scss'

const DeleteAllTasks = (props) => {
  const {
    deleteAllTasks,
  } = props

  return (
    <button
      type='button'
      className={styles.button}
      onClick={deleteAllTasks}
    >
      Delete All
    </button>
  )
}

export default DeleteAllTasks