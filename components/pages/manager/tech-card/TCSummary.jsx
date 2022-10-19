import { useRef, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Searchbox from '@components/common/Searchbox/Searchbox'
import Dropdown from '@components/common/Dropdown/Dropdown'
import DropdownTable from '@components/common/Table/DropdownTable/DropdownTable'
import SummaryCard from '@components/common/SummaryCard/SummaryCard'
import MiniSummaryCard from '@components/common/MiniSummaryCard/MiniSummaryCard'
import { TechnologistSummary, ChevronDown } from '@icons/index'

// mock data imports, to be received from API endpoint
import { techData, siteColumns } from '@components/mockData/dropdownTableData'
import { summaryCardsData } from '@components/mockData/summaryCardsData'
import { miniCardData } from '@components/mockData/miniCardData'

const DropdownIcon = (props) => {
  return <ChevronDown sx={{ fontSize: '20px' }} {...props} />
}

const TCSummary = () => {
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
        padding: '20px',
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
            <>
              <Typography variant="h2" color="textPrimary">
                Summary statistics
              </Typography>
              <Dropdown />
            </>
          </div>
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <Searchbox />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ paddingTop: '15px' }}>
        <Grid item container xs={12} md={6} columnSpacing={2}>
          <Grid
            item
            xs={3}
            md={4}
            sx={{
              // padding: '0 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TechnologistSummary />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                id="select-button"
                onClick={handleClick}
                sx={{ padding: '0', '&:hover': { background: 'transparent' } }}
              >
                <Typography
                  color="textPrimary"
                  variant="h3"
                  noWrap
                  sx={{ marginRight: '4px' }}
                >
                  {techData.map((row) => row.id === selected && row.tech)}
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
                  <DropdownTable
                    selected={selected}
                    tableData={techData}
                    columns={siteColumns}
                    handleSelection={handleSelection}
                  />
                </MenuItem>
              </Menu>
            </div>
          </Grid>

          <Grid
            item
            xs={3}
            md={3}
            sx={{
              padding: '12px 8px 8px',
              border: '1px solid #edeff5',
              borderRadius: '12px',
              // marginRight: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {miniCardData.map((miniCard) => (
              <MiniSummaryCard {...miniCard} key={miniCard.id} />
            ))}
          </Grid>

          <Grid item xs={6} md={5}>
            <div
              style={{
                backgroundColor: '#F5F6F8',
                borderRadius: '12px',
                padding: '20px 20px 14px 20px',
                height: '100%',
              }}
            >
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ marginBottom: '6px' }}
              >
                Top 3 positioning issues
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Here you can see top 3 most frequent positioning issues present
                in the images.
              </Typography>
              <div
                style={{
                  paddingTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#A8B1CE',
                    lineHeight: '20px',
                  }}
                >
                  Calculated on:
                </span>
                &nbsp;
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#6992FC',
                    fontWeight: '700',
                  }}
                >
                  10251 images
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} columnSpacing={2}>
          {summaryCardsData.map((card) => (
            <Grid item xs={4} key={card.id}>
              <SummaryCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default TCSummary
