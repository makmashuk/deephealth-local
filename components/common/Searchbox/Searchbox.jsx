import styles from './Searchbox.module.css'

const Searchbox = ({ big, fullWidth, handleSearch }) => {
  return (
    <form>
      <input
        className={`${styles.search} ${big && styles.big} ${
          fullWidth && styles.fullWidth
        }`}
        type="search"
        placeholder="Type to search..."
        onChange={handleSearch && ((e) => handleSearch(e))}
      />
    </form>
  )
}

export default Searchbox
