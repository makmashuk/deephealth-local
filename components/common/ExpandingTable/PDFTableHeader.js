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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#6A6E83',
                  gap: '0.25rem',
                  justifyContent: item.align ? item.align : 'left',
                }}
              >
                {item.box && item.box}
                {item.title}
              </div>
            </th>
          )
        })}
      </tr>
    </>
  )
}
