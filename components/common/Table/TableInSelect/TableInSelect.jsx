/**
 * This defines the select-like element that opens up the ListTable component when clicked
 */

import { useRef, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ChevronDown } from '@icons/index'
import { Typography } from '@mui/material'
import ListTable from './ListTable'

// Mock data, will be replaced by API call
import {
  siteData,
  practiceData,
  techData,
  siteColumns,
  practiceColumns,
  techColumns,
} from './tableData'

const DropdownIcon = (props) => {
  return <ChevronDown sx={{ fontSize: '20px' }} {...props} />
}

const TableInSelect = ({ forSite, forPractice, forTech, bigSelect }) => {
  const data =
    (forSite && siteData) ||
    (forPractice && practiceData) ||
    (forTech && techData)
  const columns =
    (forSite && siteColumns) ||
    (forPractice && practiceColumns) ||
    (forTech && techColumns)

  const [anchorEl, setAnchorEl] = useState(null)
  const [selected, setSelected] = useState(0)
  const handleSelection = (e) => {
    setSelected(Number(e.target.getAttribute('rowid')))
    handleClose()
  }
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    iconRef.current.style.transform = 'scaleY(-1)'
    iconRef.current.querySelector('svg path').setAttribute('stroke', '#5475CA')
  }
  const handleClose = () => {
    setAnchorEl(null)
    iconRef.current.style.transform = 'scaleY(1)'
    iconRef.current.querySelector('svg path').setAttribute('stroke', '#44495B')
  }

  const iconRef = useRef(null)

  return (
    <>
      <Button
        id="select-button"
        onClick={handleClick}
        sx={{ padding: '0', '&:hover': { background: 'transparent' } }}
      >
        <Typography
          color="textPrimary"
          variant={bigSelect ? 'h2' : 'h3'}
          noWrap
          sx={{ marginRight: '4px' }}
        >
          {forSite && data.map((row) => row.id === selected && row.sites)}
          {forPractice &&
            data.map((row) => row.id === selected && row.practice)}
          {forTech && data.map((row) => row.id === selected && row.tech)}
        </Typography>{' '}
        <div style={{ width: '30px', height: '20px' }} ref={iconRef}>
          <DropdownIcon sx={{ fontSize: '20px' }} />
        </div>
      </Button>
      <Menu
        id="select-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            maxWidth: '510px',
            background: '#fff',
            border: '1px solid #EDEFF5',
            borderRadius: '12px',
            boxShadow: '0px 4px 11px rgba(0, 0, 0, 0.05);',
            overflowY: 'auto',
            '& ul': {
              padding: 0,
              '& li': {
                padding: 0,
              },
            },
          },
        }}
      >
        <MenuItem>
          <ListTable
            selected={selected}
            tableData={data}
            columns={columns}
            handleSelection={handleSelection}
          />
        </MenuItem>
      </Menu>
    </>
  )
}

export default TableInSelect
