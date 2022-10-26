import React, { useEffect, useState } from 'react'

const PDFTableBody2 = ({ columns, rows, settings }) => {
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

  return (
    <>
      {/* if subData found on row.subData then use rowSpan using the count of row.subData.length */}
      {rows.map((row, i, arr) => {
        return (
          <React.Fragment key={i}>
            <tr>
              {columns.data.map((column, j) => {
                return (
                  <td key={column.field} style={{ textAlign: column.align }}>
                    {row[column.field]}
                    {j === columns.data.length - 1 ? `No` : ``}
                  </td>
                )
              })}
            </tr>
            {row?.subData?.map((subRow, k) => {
              return (
                <tr key={k}>
                  {columns.data.map((column, j) => {
                    return (
                      <td key={column.field}>
                        {subRow[column.field]}
                        {j === 0 && subRow.image ? `, ${subRow.image}` : ''}
                        {j === columns.data.length - 1 && subRow.starred
                          ? `yes`
                          : ''}
                        {j === 1 ? row['date'] : ``}
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

export default PDFTableBody2
