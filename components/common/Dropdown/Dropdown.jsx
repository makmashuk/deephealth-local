import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { styled } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { useState } from 'react'
import { ChevronDownMedium } from '@icons/index'

const DropdownIcon = (props) => {
  return <ChevronDownMedium sx={{ fontSize: '20px' }} {...props} />
}

const CustomDropdown = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    border: 'none',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#44495B',
    padding: '0 8px 0 0',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {},
  },
}))

const MuiSelect = styled(Select)`
  .MuiPopover-paper {
    width: 200px;
    border-radius: 8px;
    border: 1px solid #edeff5;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.05);
  }
  .MuiMenu-list {
    padding: 6px 6px;
  }
  .MuiMenu-list li {
    padding: 8px 14px;
    border-radius: 6px;
  }
`

const menuProps = {
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  disablePortal: true,
}

const Dropdown = () => {
  const [duration, setDuration] = useState(20)
  const handleChange = (e) => {
    setDuration(e.target.value)
  }
  return (
    <FormControl>
      <MuiSelect
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={duration}
        input={<CustomDropdown />}
        onChange={handleChange}
        MenuProps={menuProps}
        autoWidth
        IconComponent={DropdownIcon}
        sx={{
          '& .MuiSelect-icon': {
            top: '0',
            '& path': { transition: 'all 0.3s ease-out' },
          },
          '&:hover .MuiSelect-icon path': { stroke: '#6992FC' },
        }}
      >
        <MenuItem value={10}>1 Week</MenuItem>
        <MenuItem value={20}>1 Month</MenuItem>
        <MenuItem value={30}>1 Quarter</MenuItem>
        <MenuItem value={40}>1 Year</MenuItem>
      </MuiSelect>
    </FormControl>
  )
}

export default Dropdown
