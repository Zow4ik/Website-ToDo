import styles from './SearchTask.module.scss'
import Input from '@/components/Input/Input.jsx'
import iconSearch from '@/assets/images/icons/iconSearch.svg'

const SearchTask = (props) => {
  const {
    typeInput,
    placeholderInput,
  } = props

  return (
    <form className={styles.container}>
      <Input type={typeInput} placeholder={placeholderInput}/>
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