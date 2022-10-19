import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DropdownTable from '@components/common/Table/DropdownTable/DropdownTable'
import { Site, ChevronDown } from '@icons/index'

// mock data imports, to be received from API endpoint
import { siteData, siteColumns } from '@components/mockData/dropdownTableData'

const DropdownIcon = (props) => {
  return <ChevronDown sx={{ fontSize: '20px' }} {...props} />
}

const TLSiteHeader = () => {
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
    <Box
      sx={{
        borderRadius: '0px 0px 0px 44px',
        overflow: 'hidden',
        boxShadow: '6px 4px 14px rgba(243, 245, 250, 0.92)',
        position: 'sticky',
        top: '65px',
        backgroundColor: '#fff',
        zIndex: 10,
        padding: '12px 20px 12px 30px',
        marginBottom: '24px',
      }}
    >
      <Grid container>
        <Grid
          xs={12}
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: '#FFF',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              columnGap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '12px',
              }}
            >
              <Site />
              <Button
                id="select-button"
                onClick={handleClick}
                sx={{ padding: '0', '&:hover': { background: 'transparent' } }}
              >
                <Typography
                  color="textPrimary"
                  variant="h2"
                  noWrap
                  sx={{ marginRight: '4px' }}
                >
                  {siteData.map((row) => row.id === selected && row.sites)}
                </Typography>
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
                  <DropdownTable
                    selected={selected}
                    tableData={siteData}
                    columns={siteColumns}
                    handleSelection={handleSelection}
                  />
                </MenuItem>
              </Menu>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TLSiteHeader
