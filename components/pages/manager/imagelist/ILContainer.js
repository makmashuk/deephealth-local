import React from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import ILSiteHeader from './ILSiteHeader'
import { TLBackButton } from '@icons/index'

import IList from './IList'
import IListExpanded from './IListExpanded'

import FilterExpanded from './FilterExpanded'
import Chips from '@components/common/Chips/Chips'
import GroupButton from '@components/common/GroupButton/GroupButton'

const image_list = [
  {
    key: '1',
    title: 'Nipple not in profile',
  },
  {
    key: '2',
    title: 'Nipple not in midline',
  },
  {
    key: '3',
    title: 'Droopy breast',
  },
  {
    key: '4',
    title: 'Not enough muscle',
  },
  {
    key: '5',
    title: 'IMF not open',
  },
]

function ILDefaultContainer() {
  const [expandedTable, setExpandedTable] = React.useState(false)

  const [filterData, setFilterData] = React.useState(image_list)
  const [checkedData, setCheckedData] = React.useState([
    {
      key: '4',
      title: 'Not enough muscle',
    },
    {
      key: '5',
      title: 'IMF not open',
    },
  ]) // pass checkedData to the table
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

  const handleCheckedData = (data) => {
    console.log('checked data received on parent')
    console.log(data)
    setCheckedData(data)
  }

  const handleChips = (data) => {
    console.log('chips data received on parent')
    console.log(data)
    setCheckedData(data)
    console.log(checkedData)
  }

  const handleClearAll = () => {
    console.log('handleClearAll')
    setCheckedData([])
  }

  const handleOptions = (e) => {
    e.preventDefault()
    console.log('handleOptions')
    e.target.value === 'by images'
      ? setExpandedTable(false)
      : setExpandedTable(true)
  }

  const handleOnClickClose = (e) => {
    e.preventDefault()
    console.log('close clicked')
  }

  return (
    <>
      <ILSiteHeader />
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
                md={5}
                xs={5}
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
                  Image list
                </span>
              </Grid>

              <Grid
                item
                md={2}
                xs={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '70%',
                  }}
                >
                  <GroupButton
                    buttons={['By images', 'By studies']}
                    buttonOnClickHandler={handleOptions}
                  />
                </div>
              </Grid>

              <Grid item md={1} xs={1}></Grid>

              <Grid
                item
                xs={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                px={2}
              >
                <TextField
                  id="input-with-icon-textfield"
                  label=""
                  variant="outlined"
                  fullWidth
                  style={{
                    background: 'white',
                    width: '100%',
                    height: '36px',
                    borderRadius: '8px',
                  }}
                  placeholder="Type to search..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon.Search size={20} color={'#A8B1CE'} />
                      </InputAdornment>
                    ),
                    sx: {
                      height: 36,
                      fontSize: 12,
                      color: '#000',
                      borderRadius: '8px',
                      border: '1px solid #EDEFF5',
                    },
                  }}
                />
              </Grid>

              {/* filterButton */}
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
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
                    height: '36px',
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
                    {checkedData.length ?? 0}
                  </span>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Chips chips={checkedData} setChips={handleChips} />
          </Grid>

          <Grid item xs={12}>
            {/* <IList /> */}
            {!expandedTable ? <IList /> : <IListExpanded />}
          </Grid>
        </Grid>

        <div
          style={{
            display: displayFilter ? 'block' : 'none',
          }}
        >
          <FilterExpanded
            data={filterData}
            checkedData={checkedData}
            setDisplayFilter={handleModalClose}
            setData={handleCheckedData}
            setClearAll={handleClearAll}
          />
        </div>
      </div>
    </>
  )
}

export default ILDefaultContainer
