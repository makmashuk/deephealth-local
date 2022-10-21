import React from 'react';

export default function TableBody({ columns, rows, settings }) {
  return (
    <>
      {rows.map((item, i) => {
        return (
          <tr
            style={{
              borderBottom:
                settings.last_child_no_border && i === rows.length - 1
                  ? 'none'
                  : '1px solid #EDEFF5',
            }}
            key={i}
            onClick={() => console.log(item[i])}
          >
            {columns?.map((header, i) => {
              if (header.format) {
                return (
                  <td key={header.field} style={{ textAlign: header.align }}>
                    {header.format(item[header.field])}
                  </td>
                )
              }
              return (
                <td key={header.field} style={{ textAlign: header.align }}>
                  {item[header.field]}
                </td>
              )
            })}
          </tr>
        )
      })}
    </>
  )
}
