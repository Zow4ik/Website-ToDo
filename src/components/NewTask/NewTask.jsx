import styles from './NewTask.module.scss'
import Input from '@/components/Input/Input.jsx'
import Button from '@/components/Button/Button.jsx'

const NewTask = (props) => {
  const {
    typeInput,
    placeholderInput,
    typeButton,
    textButton
  } = props

  return (
    <form className={styles.container}>
      <Input type={typeInput} placeholder={placeholderInput}/>
      <Button type={typeButton}>{textButton}</Button>
    </form>
  )
}

export default NewTask