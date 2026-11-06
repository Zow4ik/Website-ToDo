import styles from './NewTask.module.scss'
import Input from '../Input/Input.tsx'
import Button from '../Button/Button.tsx'
import {type ComponentProps, type SubmitEvent, useState} from 'react'

interface NewTaskProps {
  typeInput: ComponentProps<'input'>["type"],
  placeholderInput: string,
  typeButton: "submit" | "reset" | "button",
  textButton: string,
  addTask: (event: SubmitEvent<HTMLFormElement>, valueInput: string) => void,
}

const NewTask = (props: NewTaskProps) => {
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