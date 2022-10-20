import React from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import TLSiteHeader from './TLSiteHeader'
import { TLBackButton } from '@icons/index'
import FilterExpanded from './FilterExpanded'
import Table from '@components/common/Table/Table'
import Chips from '@components/common/Chips/Chips'
import SeeImagesIcon from '@components/common/Table/SeeImagesIcon'
import { useRouter } from 'next/router'

const tech_list = [
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

const rawTableData = [
  {
    id: 1,
    technologist: 'Jimmy Cutler',
    study_volume: 1534,
    avg_img_per_study: 1.5,
    avg_issues_per_image: 2.0,
    actions: <SeeImagesIcon />,
    title: 'Nipple not in profile',
  },
  {
    id: 2,
    technologist: 'Wade Warren',
    study_volume: 2356,
    avg_img_per_study: 2.3,
    avg_issues_per_image: 1.7,
    actions: <SeeImagesIcon />,
    title: 'Nipple not in midline',
  },
  {
    id: 3,
    technologist: 'Devon Lane',
    study_volume: 587,
    avg_img_per_study: 2.4,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIcon />,
    title: 'Nipple not in profile',
  },
  {
    id: 4,
    technologist: 'Rosy Black',
    study_volume: 655,
    avg_img_per_study: 1.5,
    avg_issues_per_image: 1.2,
    actions: <SeeImagesIcon />,
    title: 'Nipple not in midline',
  },
  {
    id: 5,
    technologist: 'Tiger Woods',
    study_volume: 432,
    avg_img_per_study: 3.2,
    avg_issues_per_image: 3.1,
    actions: <SeeImagesIcon />,
    title: 'IMF not open',
  },
  {
    id: 6,
    technologist: 'Adriana Smith',
    study_volume: 546,
    avg_img_per_study: 1.1,
    avg_issues_per_image: 1.5,
    actions: <SeeImagesIcon />,
    title: 'Not enough muscle',
  },
  {
    id: 7,
    technologist: 'Jane Forester',
    study_volume: 321,
    avg_img_per_study: 0.7,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIcon />,
    title: 'IMF not open',
  },
  {
    id: 8,
    technologist: 'Toby McGuire',
    study_volume: 518,
    avg_img_per_study: 0.8,
    avg_issues_per_image: 2.8,
    actions: <SeeImagesIcon />,
    title: 'IMF not open',
  },
  {
    id: 9,
    technologist: 'Toni Kroos',
    study_volume: 444,
    avg_img_per_study: 0.6,
    title: 'Droopy breast',
    actions: <SeeImagesIcon />,
    avg_issues_per_image: 1.3,
    title: 'Droopy breast',
  },
  {
    id: 10,
    technologist: 'Fede Valverde',
    study_volume: 777,
    avg_img_per_study: 0.2,
    avg_issues_per_image: 2.8,
    actions: <SeeImagesIcon />,
    title: 'Droopy breast',
  },
  {
    id: 11,
    technologist: 'Cristiano Ronaldo',
    study_volume: 878,
    avg_img_per_study: 0.8,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIcon />,
    title: 'Not enough muscle',
  },
  {
    id: 12,
    technologist: 'John Doe',
    study_volume: 518,
    avg_img_per_study: 0.4,
    avg_issues_per_image: 2.8,
    actions: <SeeImagesIcon />,
    title: 'Not enough muscle',
  },
]

const columns = [
  {
    field: 'technologist',
    title: 'Technologist',
    align: 'left',
    sortable: true,
  },
  {
    field: 'study_volume',
    title: 'Study Volume',
    align: 'right',
    sortable: true,
  },
  {
    field: 'avg_img_per_study',
    title: 'Avg. img/study',
    align: 'right',
    sortable: true,
  },
  {
    field: 'avg_issues_per_image',
    title: 'Avg. issues per image',
    align: 'right',
    sortable: true,
  },
  { field: 'actions', title: 'Actions', align: 'left', sortable: false },
]

const settings = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
}

function TLSiteContainer() {
  const router = useRouter()

  const [filterData, setFilterData] = React.useState(tech_list)
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

  const [tableData, setTableData] = React.useState(rawTableData)

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
    setCheckedData(data) // checkedData will always be the same because it is hardcoded
    console.log('checkedData')
    console.log(checkedData)

    // handle table data
    const filteredTableData = rawTableData.filter((item) => {
      return data.some((checkedItem) => {
        return item.title === checkedItem.title
      })
    })

    // console.log('filteredTableData')
    // console.log(filteredTableData)
    setTableData(filteredTableData)
    console.log('tableData')
    console.log(tableData)
  }

  const handleClearAll = () => {
    console.log('handleClearAll')
    setCheckedData([])
  }

  const handleTableData = (data) => {
    console.log('handleTableData')
    console.log(data)
    setTableData(data)
  }

  const handleOnClickClose = (e) => {
    e.preventDefault()
    console.log('close clicked')
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
            <Table columns={columns} rows={tableData} settings={settings} />
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

export default TLSiteContainer
