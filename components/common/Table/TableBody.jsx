import React, { useContext } from 'react';
import { TableRowContext } from '../../../contexts/TableRowContext';

export default function TableBody({ columns, settings }) {
  const rows = useContext(TableRowContext)
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
