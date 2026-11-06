import styles from './SearchTask.module.scss'
import Input from '../Input/Input.tsx'
import iconSearch from '../../assets/images/icons/iconSearch.svg'
import type { ComponentProps } from "react";

interface SearchTaskProps {
  typeInput: ComponentProps<'input'>["type"],
  placeholderInput: string,
  inputValue: string,
  handleSearchChange: (value: string) => void,
}

const SearchTask = (props: SearchTaskProps) => {
  const {
    typeInput,
    placeholderInput,
    inputValue,
    handleSearchChange,
  } = props

  return (
    <form
      className={styles.container}
      onSubmit={(event) => event.preventDefault()}
    >
      <Input
        type={typeInput}
        placeholder={placeholderInput}
        setValueInput={handleSearchChange}
        valueInput={inputValue}
      />
      <button type="button" className={styles.button}>
        <img
          src={iconSearch}
          alt='search'
          width={16}
          height={16}
          loading='lazy'
        />
      </button>
    </form>
  )
}

export default SearchTask