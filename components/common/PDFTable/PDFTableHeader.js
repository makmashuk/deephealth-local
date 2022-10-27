import React from 'react'

export default function PdfTableHeader({ columns, rows, settings }) {
  return (
    <>
      <tr>
        {columns.data.map((item, i) => {
          return (
            <th
              key={i}
              style={{
                width: item.width,
              }}
            >
              {item.box && item.box}
              {item.title}
            </th>
          )
        })}
      </tr>
    </>
  )
}
