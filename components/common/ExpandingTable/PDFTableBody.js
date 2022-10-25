import React, { useEffect, useState } from 'react'
import styles from './styles/table.module.css'

export default function PDFTableBody({ columns, rows, settings }) {
  const [expanding, setExpanding] = useState([])

  const expandingHandler = (id) => {
    if (expanding.includes(id)) {
      const newArr = expanding.filter((el) => el !== id)
      setExpanding(newArr)
    } else {
      setExpanding([...expanding, id])
    }
  }

  useEffect(() => {
    console.log('pdfTableBody: useEffect')
    console.log(rows)
  }, [rows])

  // useEffect(() => {
  //   // console.log(selectedBatch.length);

  //   rows.forEach((row) => {
  //     if (row?.subData?.map((d) => d.id)?.every((el) => selectedBatch.includes(el))) selectOne(row?.id);
  //   });
  // }, [selectedBatch, rows]);

  return (
    <>
      {rows.map((row, i, arr) => {
        return (
          <React.Fragment key={i}>
            <tr key={i} className="text-primary-300">
              {columns.data.map((column, i) => {
                if (column.format) {
                  if (columns.expandable) {
                    return (
                      <td
                        key={column.field}
                        style={{ textAlign: column.align }}
                      >
                        {column.format(
                          row[column.field], // row[column.field] is the value of the field
                          row, // row is the entire row
                          expanding.includes(row.id), // expanding is the array of expanded rows
                          () => expandingHandler(row?.id) // expandingHandler is the function to expand/collapse the row
                        )}
                      </td>
                    )
                  } else {
                    return (
                      <td
                        key={column.field}
                        style={{ textAlign: column.align }}
                      >
                        {column.format(row[column.field], row)}
                      </td>
                    )
                  }
                }
                return (
                  <td key={column.field} style={{ textAlign: column.align }}>
                    {row[column.field]}
                  </td>
                )
              })}
            </tr>

            {/* SubData */}
            {row?.subData?.length &&
              row?.subData?.map((subItem, index, arr) => {
                return (
                  <tr
                    className={[
                      styles.collapse,
                      expanding.includes(row.id)
                        ? styles['collapse__open']
                        : null,
                      index + 1 === arr.length
                        ? styles['collapse--last']
                        : null,
                      'fs-300',
                      'text-primary-300',
                    ].join(' ')}
                    key={subItem?.id}
                  >
                    {columns?.subData?.map((column, i) => {
                      if (column.format) {
                        return (
                          <td
                            key={column.field}
                            style={{ textAlign: column.align }}
                          >
                            {column.format(subItem[column.field])}
                          </td>
                        )
                      }
                      return (
                        <td
                          key={column.field}
                          style={{ textAlign: column.align }}
                        >
                          {subItem[column.field]}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
          </React.Fragment>
        )
      })}
    </>
  )
}
