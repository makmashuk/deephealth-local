import React, { useState, useEffect, useMemo } from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import ILSiteHeader from './ILSiteHeader'
import IList from './IList' // for -> by studies table
import IListExpanded from './IListExpanded' // for -> by studies table
import FilterExpanded from './FilterExpanded'
import Chips from './Chips'
import GroupButton from '@components/common/GroupButton/GroupButton'
import { StarOutline, StarFilled, TLBackButton } from '@icons/index'
import Table from '@components/common/Table/Table'
import ExpandingTable from '@components/common/ExpandingTable/ExpandingTable'

import {
  ilTableColumnsByImages,
  ilTableRowDataByImages,
  ilTableSettingsByImages,
} from '@components/mockData/imageListByImagesData'

import {
  ilTableColumnsByStudies,
  ilTableRowDataByStudies,
  ilTableSettingsByStudies,
} from '@components/mockData/imageListByStudiesData'

const filter = {
  quality: ['Perfect', 'Good', 'Bad'],
  views: ['RMLO', 'LMLO', 'RCC', 'LCC'],
  flag: ['Unflagged', 'Flagged'],
  density: ['Dense', 'Non Dense'],
  positioning_issues: [
    'Nipple not in profile',
    'Nipple not in midline',
    'Droopy breast',
    'Not enough muscle',
    'IMF not open',
  ],
}

const selected = {
  quality: ['Perfect'],
  views: ['RMLO', 'LCC'],
  flag: 'Flagged',
  density: ['Dense'],
  positioning_issues: ['Not enough muscle', 'IMF not open'],
}

const StarredTooltip = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          background: '#44495B',
          boxShadow: '0px 12px 18px rgba(55, 63, 94, 0.2)',
          borderRadius: '12px',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '380px',
          position: 'absolute',
          bottom: '1rem',
          right: '25rem',
        }}
      >
        <span
          style={{
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#A8B1CE',
          }}
        >
          Starring an image means to add it to “Images to review” list. Use this
          feature to have a quick access to those list at any time.
        </span>
      </Grid>
    </>
  )
}

const DownloadTile = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          background: '#44495B',
          boxShadow: '0px 12px 18px rgba(55, 63, 94, 0.2)',
          borderRadius: '12px',
          padding: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '16px',
            color: '#ffffff',
          }}
        >
          1 studies selected
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              background: '#6992FC',
              border: 'none',
              padding: '0.5rem 2rem',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '16px',
              color: '#ffffff',
            }}
          >
            Export list
          </button>
        </Grid>
      </Grid>
    </>
  )
}

function ILDefaultContainer() {
  const [expandedTable, setExpandedTable] = useState(false)
  const [filterData, setFilterData] = useState(filter)

  const [checkedData, setCheckedData] = useState(selected.positioning_issues) // checkedData is only positioning_issues which is related to chips
  const [selectedData, setSelectedData] = useState(selected) // pass checkedData to the table
  const [displayFilter, setDisplayFilter] = useState(false)

  const [tableData, setTableData] = useState(ilTableRowDataByImages)
  const [expandedTableData, setExpandedTableData] = useState(
    ilTableRowDataByStudies
  )

  // useEffect to update when chips -> positioning_issues is changed (by images)
  useEffect(() => {
    const updatedTableData = ilTableRowDataByImages.filter((item) =>
      checkedData.includes(item.positioning_issues)
    )
    console.log('updatedTableData')
    setTableData(updatedTableData)
    console.log(updatedTableData)
  }, [checkedData])

  // by studies (expanded table)
  useEffect(() => {
    const updatedTableData = ilTableRowDataByStudies.filter((item) =>
      checkedData.includes(item.positioning_issues)
    )
    console.log('updatedTableData')
    setExpandedTableData(updatedTableData)
    console.log(updatedTableData)
  }, [checkedData])

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

  const handleOptions = (e) => {
    e.preventDefault()
    console.log('handleOptions')
    e.target.value === 'by images'
      ? setExpandedTable(false)
      : setExpandedTable(true)
    // clear the handleSearch input name search
  }

  const handleSearch = (e) => {
    e.preventDefault()
    let keyword = e.target.value

    setTimeout(() => {
      if (!expandedTable) {
        const filterSearch = ilTableRowDataByImages.filter((item) => {
          return (
            item.accession_number
              .toLowerCase()
              .includes(keyword.toLowerCase()) ||
            item.date.toLowerCase().includes(keyword.toLowerCase()) ||
            item.view.toLowerCase().includes(keyword.toLowerCase()) ||
            item.images.toLowerCase().includes(keyword.toLowerCase())
          )
        })
        console.log('filterSearch')
        console.log(filterSearch)
        setTableData(filterSearch)
      } else {
        const expandedFilterSearch = ilTableRowDataByStudies.filter((item) => {
          return (
            item.accession_number
              .toLowerCase()
              .includes(keyword.toLowerCase()) ||
            item.date.toLowerCase().includes(keyword.toLowerCase()) ||
            item.quality.toLowerCase().includes(keyword.toLowerCase()) ||
            item.image.toLowerCase().includes(keyword.toLowerCase())
          )
        })
        console.log('expandedFilterSearch')
        console.log(expandedFilterSearch)
        setExpandedTableData(expandedFilterSearch)
      }
    }, 2000)
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
                <div>
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
            {!expandedTable ? (
              <IList
                columns={ilTableColumnsByImages}
                rows={tableData}
                settings={ilTableSettingsByImages}
              />
            ) : (
              <IListExpanded
                columns={ilTableColumnsByStudies}
                rows={expandedTableData}
                settings={ilTableSettingsByStudies}
              />
            )}
          </Grid>

          <Grid item xs={4}>
            <StarredTooltip />
          </Grid>

          <Grid item xs={4}>
            <DownloadTile />
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

export default ILDefaultContainer
