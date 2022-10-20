import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import ILSiteHeader from './ILSiteHeader'
import { TLBackButton } from '@icons/index'

import IList from './IList' // for -> by images table
import IListExpanded from './IListExpanded' // for -> by studies table

import FilterExpanded from './FilterExpanded'
import Chips from './Chips'
import GroupButton from '@components/common/GroupButton/GroupButton'
import { StarOutline, StarFilled } from '@icons/index'

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
  flag: ['Flagged'],
  density: ['Dense'],
  positioning_issues: ['Not enough muscle', 'IMF not open'],
}

const tableColumns = [
  {
    field: 'images',
    title: 'Images',
    align: 'left',
    sortable: true,
  },
  {
    field: 'accession_number',
    title: 'Accession number',
    align: 'left',
    sortable: true,
  },
  {
    field: 'date',
    title: 'Date',
    align: 'left',
    sortable: true,
  },
  {
    field: 'view',
    title: 'View',
    align: 'left',
    sortable: true,
  },
  {
    field: 'issues',
    title: 'Issues',
    align: 'right',
    sortable: true,
  },
  {
    field: 'starred',
    title: 'Starred',
    align: 'right',
    sortable: true,
  },
]

const rawTableData = [
  {
    id: 1,
    images: 'Image_1',
    accession_number: 'BWC5174901DSA',
    date: '03.05.2022',
    view: 'RMLO',
    issues: '0',
    starred: <StarOutline size={10} />,
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 2,
    images: 'Image_2',
    accession_number: 'ZUH291076825321',
    date: '02.05.2022',
    view: 'RMLO',
    issues: '0',
    starred: <StarFilled size={10} />,
    positioning_issues: 'IMF not open',
  },
  {
    id: 3,
    images: 'Image_3',
    accession_number: 'DQO098271492753',
    date: '01.05.2022',
    view: 'LMLO',
    issues: '1',
    starred: <StarOutline size={10} />,
    positioning_issues: 'IMF not open',
  },
  {
    id: 4,
    images: 'Image_4',
    accession_number: 'MT2QS8219312912010',
    date: '28.04.2022',
    view: 'LMLO',
    issues: '2',
    starred: <StarOutline size={10} />,
    positioning_issues: 'Droopy breast',
  },
  {
    id: 5,
    images: 'Image_5',
    accession_number: 'DQO098271492753',
    date: '27.05.2022',
    view: 'LCC',
    issues: '2',
    starred: <StarFilled size={10} />,
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 6,
    images: 'Image_6',
    accession_number: 'MT2QS8219312912010',
    date: '27.05.2022',
    view: 'LMLO',
    issues: '2',
    starred: <StarFilled size={10} />,
    positioning_issues: 'Nipple not in midline',
  },
]

const tableSettings = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
}

function ILDefaultContainer() {
  const [expandedTable, setExpandedTable] = useState(false)
  const [filterData, setFilterData] = useState(filter)

  const [checkedData, setCheckedData] = useState(selected.positioning_issues) // checkedData is only positioning_issues which is related to chips
  const [selectedData, setSelectedData] = useState(selected) // pass checkedData to the table
  const [displayFilter, setDisplayFilter] = useState(false)

  const [tableData, setTableData] = useState(rawTableData)

  // useEffect
  useEffect(() => {
    const updatedTableData = rawTableData.filter((item) =>
      checkedData.includes(item.positioning_issues)
    )
    console.log('updatedTableData')
    setTableData(updatedTableData)
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
    setCheckedData(data.positioning_issues)
    data.positioning_issues.forEach((pos, i) => {
      if (pos === 'Select All') {
        console.log('Select All detected')
        // remove it from selection.
        data.positioning_issues = data.positioning_issues.filter(
          (item) => item !== 'Select All'
        )
      }
    })
    console.log('chips data updated')
    console.log('checked data')
    // pass selectedData to tables
    setSelectedData(data)
  }

  const handleChips = (data) => {
    console.log('chips data received on parent')
    console.log(data)
    setCheckedData(data)
  }

  const handleClearAll = () => {
    console.log('handleClearAll')
    setSelectedData([])
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
            {!expandedTable ? (
              <IList
                columns={tableColumns}
                rows={tableData}
                settings={tableSettings}
              />
            ) : (
              <IListExpanded />
            )}
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
