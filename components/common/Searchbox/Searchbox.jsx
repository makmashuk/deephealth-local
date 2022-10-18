import styles from './Searchbox.module.css'

const Searchbox = ({ big = false, fullWidth = false }) => {
  let styleClasses = `${styles.search}`
  big && (styleClasses += ` ${styles.big}`)
  fullWidth && (styleClasses += ` ${styles.fullWidth}`)

  return (
    <form>
      <input
        className={styleClasses}
        type="search"
        name=""
        id=""
        placeholder="Type to search..."
      />
    </form>
  )
}

export default Searchbox
