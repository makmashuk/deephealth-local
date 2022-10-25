import { useState } from 'react'
import { Link } from '@mui/material'
import { Typography } from '@mui/material'
import ImageModal from '../ImageModal/ImageModal'

export default function TableBody({ columns, rows, settings }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const handleModal = (id) => {
    setOpen(true)
    setIndex(id)
  }
  const handleClose = () => setOpen(false)

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
              if (header.field === 'images') {
                return (
                  <td key={header.field} style={{ textAlign: header.align }}>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleModal(item.id - 1)}
                    >
                      {item[header.field]}
                    </Typography>
                  </td>
                )
              }
              if (header.routable) {
                return (
                  <td key={header.field} style={{ textAlign: header.align }}>
                    <Link
                      href="/practice/techlist/summary"
                      underline="none"
                      color="text.secondary"
                      sx={{
                        transition: 'all 0.3s ease-out',
                        '&:hover': {
                          color: '#6992FC',
                        },
                      }}
                    >
                      {item[header.field]}
                    </Link>
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
      <ImageModal
        open={open}
        handleClose={handleClose}
        index={index}
        setIndex={setIndex}
      />
    </>
  )
}
