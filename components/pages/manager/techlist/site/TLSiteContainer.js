import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import TLSiteHeader from './TLSiteHeader'
import { TLBackButton } from '@icons/index'
import FilterExpanded from './FilterExpanded'
import TListSite from './TListSite'
import Chips from './Chips'
import { useRouter } from 'next/router'

import {
  techListSiteColumns,
  techListSiteRowData,
  techListSiteTableSettings,
} from '@components/mockData/techListSiteData'

const filter = {
  positioning_issues: [
    'Nipple not in profile',
    'Nipple not in midline',
    'Droopy breast',
    'Not enough muscle',
    'IMF not open',
  ],
}

const selected = {
  positioning_issues: ['Not enough muscle', 'IMF not open'],
}

function TLSiteContainer() {
  const [filterData, setFilterData] = useState(filter)

  const [checkedData, setCheckedData] = useState(selected.positioning_issues) // checkedData is only positioning_issues which is related to chips
  const [selectedData, setSelectedData] = useState(selected) // pass checkedData to the table
  const [displayFilter, setDisplayFilter] = useState(false)

  const [tableData, setTableData] = useState(techListSiteRowData)

  const router = useRouter()

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

  const handleSelectedData = (data) => {
    console.log('selected data received on parent')
    console.log(data)
    if (data.positioning_issues.length > 0) {
      data.positioning_issues.forEach((pos, i) => {
        if (pos === 'Select All') {
          console.log('Select All detected')
          data.positioning_issues = data.positioning_issues.filter(
            (item) => item !== 'Select All'
          )
        }
      })
      setCheckedData(data.positioning_issues)
    } else {
      setCheckedData([])
    }
    console.log('chips data updated')
    console.log('checked data')
    setSelectedData(data)
    // pass selectedData to tables
  }

  const handleChips = (data) => {
    console.log('chips data received on parent')
    console.log(data)
    setCheckedData(data)
  }

  const handleClearAll = () => {
    console.log('handleClearAll')
    setSelectedData({
      quality: [],
      views: [],
      flag: [],
      density: [],
      positioning_issues: [],
    })
    console.log(selectedData)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    let keyword = e.target.value

    setTimeout(() => {
      const filterSearch = techListSiteRowData.filter((item) => {
        return item.technologist.toLowerCase().includes(keyword.toLowerCase())
      })
      console.log('filterSearch')
      console.log(filterSearch)
      setTableData(filterSearch)
    }, 2000)
  }

  return (
    <>
      <TLSiteHeader />
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
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => router.back()}
                >
                  <TLBackButton />
                </span>
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

              <Grid item md={3} xs={3}></Grid>

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
                  onKeyUp={handleSearch}
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
            <TListSite
              columns={techListSiteColumns}
              rows={tableData}
              settings={techListSiteTableSettings}
            />
          </Grid>
        </Grid>

        <div
          style={{
            display: displayFilter ? 'block' : 'none',
          }}
        >
          <FilterExpanded
            data={filterData}
            selectedData={selectedData}
            setData={handleSelectedData}
            selectedPosData={checkedData}
            setDisplayFilter={handleModalClose}
            setClearAll={handleClearAll}
          />
        </div>
      </div>
    </>
  )
}

export default TLSiteContainer
