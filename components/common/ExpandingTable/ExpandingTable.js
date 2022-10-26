import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import jsPDF from 'jspdf'
import styles from './styles/table.module.css'
import ExpandingTableBody from './ExpandingTableBody'
import ExpandingTableHeader from './ExpandingTableHeader'
import PDFTable from '../PDFTable/PDFTable'
import { renderToString } from 'react-dom/server'

export default function ExpandingTable({ columns, rows, settings }) {
  const [selected, setSelected] = useState([])
  const [selectedBatch, setSelectedBatch] = useState([])
  const [sortableFields, setSortableFields] = useState([])
  const [tableData, setTableData] = useState(rows)

  const [selectedRows, setSelectedRows] = useState([])

  useEffect(() => {
    setTableData(rows)
  }, [rows])

  useEffect(() => {
    const selRows = tableData.filter((row) => selected.includes(row.id))
    console.log('selRows')
    console.log(selRows)
    setSelectedRows(selRows)
  }, [selected])

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1
        if (b[sortField] === null) return -1
        if (a[sortField] === null && b[sortField] === null) return 0
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'ASC' ? 1 : -1)
        )
      })
      setTableData(sorted)
    }
  }

  const selectAll = () => {
    console.log('selectAll test1')
    if (selected.length === rows.length) {
      setSelected([])
      setSelectedBatch([])
    } else {
      const subDataIdArr = rows?.map((row) => {
        return row?.subData?.map((d) => d.id)
      })
      setSelected(rows.map((row) => row?.id))
      setSelectedBatch(subDataIdArr.flat().filter(Boolean))
    }
  }

  const selectOne = (id) => {
    console.log('selectOne ' + id)
    const one = selected.find((item) => item === id)
    if (one) {
      const deleted = selected.filter((item) => item !== id)
      setSelected(deleted)
    } else {
      setSelected([...selected, id])
    }
    console.log(selected)
  }

  const selectBatch = (arr) => {
    const every = arr?.every((el) => selectedBatch.includes(el))

    if (every) {
      const deleted = selectedBatch.filter((item) => !arr.includes(item))
      setSelectedBatch(() => deleted)
    } else {
      setSelectedBatch([...selectedBatch, ...arr])
    }
  }

  useEffect(() => {
    sortableFields.forEach((item) => {
      handleSorting(item.name, item.order)
    })
    console.log(sortableFields)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortableFields])

  const DownloadTile = ({ count, selectedAll, selectedIds }) => {
    // const selRows = tableData.filter((row) => selectedIds.includes(row.id))
    // console.log('selRows')
    // console.log(selRows)
    // setSelectedRows(selRows)
    return (
      <>
        <Grid
          item
          xs={12}
          sx={{
            background: '#44495B',
            boxShadow: '0px 12px 18px rgba(55, 63, 94, 0.2)',
            borderRadius: '12px',
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
            position: 'absolute',
            bottom: '1rem',
            right: '2rem',
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '16px',
              color: '#ffffff',
            }}
          >
            {selectedAll
              ? ' All studies selected'
              : count + ' studies selected'}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              style={{
                background: '#6992FC',
                border: 'none',
                padding: '0.5rem 2rem',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '16px',
                color: '#ffffff',
                cursor: 'pointer',
              }}
              onClick={(e) => {
                e.preventDefault()
                generatePDF()
              }}
            >
              Export list
            </button>
          </Grid>
        </Grid>
      </>
    )
  }

  const generatePDF = () => {
    const htmlString = renderToString(
      <PDFTable columns={columns} rows={selectedRows} settings={settings} />
    )
    // console.log(string)
    let timeStamps = new Date().getTime()

    const pdf = new jsPDF('p', 'pt', 'a4', true)

    pdf.html(htmlString, {
      async callback(pdf) {
        pdf.save(`test_${timeStamps}.pdf`)
      },
      margin: 40,
      filename: `test_${timeStamps}.pdf`,
      width: 500,
      windowWidth: 700,
    })
  }

  return (
    <div className="card">
      <table className={styles.table}>
        <thead>
          <ExpandingTableHeader
            columns={columns}
            rows={tableData}
            sortableFields={sortableFields}
            setSortableFields={setSortableFields}
            selectAll={selectAll}
            selected={selected}
            settings={settings}
          />
        </thead>
        <tbody>
          <ExpandingTableBody
            columns={columns}
            rows={tableData}
            selected={selected}
            selectedBatch={selectedBatch}
            selectOne={selectOne}
            selectBatch={selectBatch}
            settings={settings}
          />
        </tbody>
      </table>
      {selected.length > 0 && (
        <DownloadTile
          count={selected.length}
          selectedAll={selected.length === rows.length}
          selectedIds={selected}
        />
      )}
    </div>
  )
}
