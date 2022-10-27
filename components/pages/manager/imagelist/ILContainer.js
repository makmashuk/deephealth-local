import GroupButton from '@components/common/GroupButton/GroupButton'
import { FilterFunnel, TLBackButton } from '@icons/index'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import Chips from './Chips'
import FilterExpanded from './FilterExpanded'
import IList from './IList'
import IListExpanded from './IListExpanded'
import ILSiteHeader from './ILSiteHeader'
import { useRouter } from 'next/router'

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

function ILContainer() {
  const router = useRouter()

  const [onChangeCheckedFromChild, setOnChangeCheckedFromChild] =
    useState(false)
  const [expandedTable, setExpandedTable] = useState(false)
  const [filterData, setFilterData] = useState(filter)

  const [checkedData, setCheckedData] = useState(selected.positioning_issues) // checkedData is only positioning_issues which is related to chips
  const [selectedData, setSelectedData] = useState(selected) // pass checkedData to the table
  const [displayFilter, setDisplayFilter] = useState(false)

  const [tableData, setTableData] = useState(ilTableRowDataByImages)
  const [expandedTableData, setExpandedTableData] = useState(
    ilTableRowDataByStudies
  )

  useEffect(() => {
    if (!onChangeCheckedFromChild) {
      if (checkedData.length === 0) {
        setTableData(ilTableRowDataByImages)
        setExpandedTableData(ilTableRowDataByStudies)
      } else {
        const updatedTableData = ilTableRowDataByImages.filter((item) =>
          checkedData.includes(item.positioning_issues)
        )
        console.log('updatedTableData by images')
        setTableData(updatedTableData)
        console.log(updatedTableData)

        const updatedExpTableData = ilTableRowDataByStudies.filter((item) =>
          checkedData.includes(item.positioning_issues)
        )
        console.log('updatedTableData by studies')
        setExpandedTableData(updatedExpTableData)
        console.log(updatedTableData)
      }
    }
  }, [checkedData])

  useEffect(() => {
    if (!onChangeCheckedFromChild) {
      if (
        selectedData.quality.length === 0 &&
        selectedData.views.length === 0 &&
        selectedData.flag.length === 0 &&
        selectedData.density.length === 0 &&
        selectedData.positioning_issues.length === 0
      ) {
        setTableData(ilTableRowDataByImages)
        setExpandedTableData(ilTableRowDataByStudies)
      } else {
        console.log('selectedData useEffect')
        const updatedTableData = ilTableRowDataByImages.filter(
          (item) =>
            selectedData.views.includes(item.view) ||
            selectedData.positioning_issues.includes(item.positioning_issues)
        )
        const updatedExpandedTableData = ilTableRowDataByStudies.filter(
          (item) =>
            selectedData.quality.includes(item.quality) ||
            selectedData.views.includes(item.view) ||
            selectedData.density.includes(item.density) ||
            selectedData.positioning_issues.includes(item.positioning_issues)
        )
        setTableData(updatedTableData)
        setExpandedTableData(updatedExpandedTableData)
      }
    }
  }, [selectedData])

  const handleDisplayFilters = (e) => {
    e.preventDefault()
    setDisplayFilter(true)
  }

  const handleModalClose = () => {
    setDisplayFilter(false)
  }

  const handleSelectedData = (data) => {
    console.log('selected data received on parent')
    console.log(data)
    if (data.onChangeChecked) {
      setOnChangeCheckedFromChild(true)
    } else {
      setOnChangeCheckedFromChild(false)
    }
    if (data.positioning_issues.length > 0) {
      setCheckedData(data.positioning_issues)
    } else {
      setCheckedData([])
    }
    setSelectedData(data)
  }

  const handleChips = (data) => {
    console.log('chips data received on parent')
    // console.log(data)
    if (data.length === 0) {
      setCheckedData([])
      setSelectedData({
        quality: [],
        views: [],
        flag: [],
        density: [],
        positioning_issues: [],
      })
      setOnChangeCheckedFromChild(false)
    } else {
      setCheckedData(data)
      setOnChangeCheckedFromChild(false)
    }
  }

  const handleClearAll = () => {
    console.log('handleClearAll')
    setSelectedData({
      quality: [],
      views: [],
      flag: 'Unflagged',
      density: [],
      positioning_issues: [],
    })
    console.log(selectedData)
  }

  const handleOptions = (e) => {
    e.preventDefault()
    e.target.value === 'by images'
      ? setExpandedTable(false)
      : setExpandedTable(true)
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
                md={4}
                xs={12}
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
                  Image list
                </span>
              </Grid>

              <Grid
                item
                md={4}
                xs={12}
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

              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    paddingRight: '10px',
                  }}
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
                      width: '300px',
                      minWidth: '230px',
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
                </div>

                {/* filterButton */}
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
                    height: '36px',
                    width: '110px',
                    minWidth: '110px',
                    cursor: 'pointer',
                  }}
                  onClick={handleDisplayFilters}
                >
                  <FilterFunnel />
                  &nbsp;&nbsp;
                  <span
                    style={{
                      color: '#ffffff',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '16px',
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
            {!onChangeCheckedFromChild && (
              <Chips chips={checkedData} setChips={handleChips} />
            )}
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

export default ILContainer
