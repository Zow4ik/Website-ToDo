import styles from './NewTask.module.scss'
import Input from '@/components/Input/Input.jsx'
import Button from '@/components/Button/Button.jsx'
import {useState} from 'react'

const NewTask = (props) => {
  const {
    typeInput,
    placeholderInput,
    typeButton,
    textButton,
    addTask,
  } = props

  const [valueInput, setValueInput] = useState('')

  return (
    <form
      className={styles.container}
      onSubmit={(event) => {
        addTask(event, valueInput)
        setValueInput('')
      }}
    >
      <Input
        type={typeInput}
        placeholder={placeholderInput}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
      <Button type={typeButton}>{textButton}</Button>
    </form>
  )
}

export default NewTask