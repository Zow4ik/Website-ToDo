import styles from './SearchTask.module.scss'
import Input from '@/components/Input/Input.jsx'
import iconSearch from '@/assets/images/icons/iconSearch.svg'
import { useState } from 'react'

const SearchTask = (props) => {
  const {
    typeInput,
    placeholderInput,
    searchTasks,
  } = props

  const [valueInput, setValueInput] = useState('')

  return (
    <form
      className={styles.container}
      onSubmit={(event) => searchTasks(event, valueInput)}
    >
      <Input
        type={typeInput}
        placeholder={placeholderInput}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
      <button className={styles.button}>
        <img
          src={iconSearch}
          alt='search'
          width='16'
          height='16'
          loading='lazy'
        />
      </button>
    </form>
  )
}

export default SearchTask