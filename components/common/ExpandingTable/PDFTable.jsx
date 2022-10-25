import PDFTableBody from './PDFTableBody'
import PDFTableHeader from './PDFTableHeader'
import styles from './styles/table.module.css'

const PDFTable = ({ columns, rows, settings }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <PDFTableHeader
            columns={columns}
            rows={rows}
            settings={settings}
          />
        </thead>
        <tbody>
          <PDFTableBody
            columns={columns}
            rows={rows}
            settings={settings}
          />
        </tbody>
      </table>
    </>
  )
}

export default PDFTable