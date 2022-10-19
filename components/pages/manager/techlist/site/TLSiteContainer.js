import React from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import { Close } from '@icons/index'
import Button from '@mui/material/Button'

import TopPart from '@components/common/TopPart/TopPart'
import { TLBackButton, Trash } from '@icons/index'

import SOTable from '@components/pages/manager/site-overview/SOTable'
import FilterExpanded from './FilterExpanded'

import Chips from '@components/common/Chips/Chips'

const tech_list = [
  {
    id: '1',
    key: '1',
    title: 'Nipple not in profile',
    is_checked: true,
  },
  {
    id: '2',
    key: '2',
    title: 'Nipple not in midline',
    is_checked: false,
  },
  {
    id: '3',
    key: '3',
    title: 'Droopy breast',
    is_checked: false,
  },
  {
    id: '4',
    key: '4',
    title: 'Not enough muscle',
    is_checked: false,
  },
  {
    id: '5',
    key: '5',
    title: 'IMF not open',
    is_checked: false,
  },
]

function TLSiteContainer() {
  const [filterData, setFilterData] = React.useState(tech_list)
  const [displayFilter, setDisplayFilter] = React.useState(false)

  const handleDisplayFilters = (e) => {
    e.preventDefault()
    setDisplayFilter(true)
    console.log(displayFilter)
    console.log('handleDisplayFilters')
  }

  const handleModalClose = () => {
    console.log('modal close triggered')
    setDisplayFilter(false)
  }

  const handleFilterData = (data) => {
    console.log('filter data received on parent')
    console.log(data)
    setFilterData(data)
  }

  const handleChips = (data) => {
    console.log('chips data received on parent')
    console.log(data)
    setFilterData(data)
  }

  const handleOnClickClose = (e) => {
    e.preventDefault()
    console.log('close clicked')
    // console.log(e)
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Grid
        container
        padding={2}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              md={6}
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <TLBackButton />
              &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  fontStyle: 'normal',
                  fontWeight: 800,
                  fontSize: '24px',
                  lineHeight: '24px',
                  color: '#44495B',
                }}
              >
                Technologists list
              </span>
            </Grid>

            <Grid
              item
              xs={5}
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <TextField
                id="input-with-icon-textfield"
                label=""
                variant="outlined"
                fullWidth
                style={{
                  background: 'white',
                  width: '340px',
                  marginRight: '16px',
                }}
                placeholder="Type to search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon.Search size={20} color={'#A8B1CE'} />
                    </InputAdornment>
                  ),
                  sx: {
                    height: 32,
                    fontSize: 12,
                    color: '#000',
                    borderRadius: '8px',
                  },
                }}
              />
            </Grid>

            {/* filterButton */}
            <Grid
              style={{
                cursor: 'pointer',
              }}
              onClick={handleDisplayFilters}
              item
              xs={1}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  padding: '4px 8px',
                  background: '#6992FC',
                  borderRadius: '12px',
                  color: '#ffffff',
                  textTransform: 'none',
                  width: '100%',
                }}
              >
                <Icon.Filter size={16} />
                &nbsp;&nbsp;
                <span
                  style={{
                    color: '#ffffff',
                  }}
                >
                  Filters
                </span>
                &nbsp;&nbsp;
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    borderRadius: '4px',
                    color: '#6992FC',
                    fontSize: '10px',
                    height: '20px',
                    width: '20px',
                    textAlign: 'center',
                  }}
                >
                  5
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Chips chips={filterData} setChips={handleChips} />
        </Grid>

        <Grid item xs={12}>
          <SOTable />
        </Grid>
      </Grid>

      <Grid
        style={{
          display: displayFilter ? 'block' : 'none',
        }}
        item
        xs={12}
      >
        <FilterExpanded
          data={filterData}
          setDisplayFilter={handleModalClose}
          setData={handleFilterData}
        />
      </Grid>
    </div>
  )
}

export default TLSiteContainer
