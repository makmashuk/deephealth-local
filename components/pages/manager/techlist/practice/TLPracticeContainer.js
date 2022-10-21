import React, { useState, useEffect, createContext } from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import { TLBackButton } from '@icons/index'
import TLPracticeHeader from './TLPracticeHeader'
import TLPracticeList from './TLPracticeList'
import ProgressLineMultiple from '@components/common/Charts/ProgressLineMultiple'
import { useRouter } from 'next/router'

const progressData = [
  {
    percentage: '50',
    color: '#27C052',
  },
  {
    percentage: '30',
    color: '#ABD84B',
  },
  {
    percentage: '20',
    color: '#DF6666',
  },
]

const columns = [
  {
    field: 'technologist',
    title: 'Technologist',
    align: 'left',
    sortable: true,
    format: (value) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ flex: 1 }}>{value}</span>
        <ProgressLineMultiple
          progressParts={progressData}
          height="2px"
          width="7em"
        />
      </div>
    ),
  },
  {
    field: 'site',
    title: 'Site',
    align: 'left',
    sortable: true,
  },
  {
    field: 'perfect_images',
    title: 'Perfect images',
    align: 'right',
    sortable: true,
  },
  {
    field: 'good_images',
    title: 'Good images',
    align: 'right',
    sortable: true,
  },
  {
    field: 'bad_images',
    title: 'Bad images',
    align: 'right',
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
]

const rawTableData = [
  {
    id: 1,
    technologist: 'Jimmy Cutler',
    progress: (
      <ProgressLineMultiple progressParts={progressData} height="2px" />
    ),
    site: 'USCF General Hospital',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 2,
    technologist: 'Wade Warren',
    site: 'Princeton Plainsborough',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 3,
    technologist: 'Devon Lane',
    site: 'Dallas General Hospital',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 4,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 5,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 6,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 7,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 8,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 9,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 10,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
]

const tableSettings = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
}

function TLPracticeContainer() {
  const router = useRouter()
  const [tableData, setTableData] = useState(rawTableData)
  const handleSearch = (e) => {
    console.log('handleSearch')
    let keyword = e.target.value
    console.log(keyword)
    const filterSearch = rawTableData.filter((item) => {
      return (
        item.technologist.toLowerCase().includes(keyword.toLowerCase()) ||
        item.site.toLowerCase().includes(keyword.toLowerCase())
      )
    })
    console.log('filterSearch')
    console.log(filterSearch)
    setTableData(filterSearch)
  }

  return (
    <>
      <TLPracticeHeader />
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
                  onKeyUp: (e) => handleSearch(e),
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
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TLPracticeList
            columns={columns}
            rows={tableData}
            settings={tableSettings}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  )
}

export default TLPracticeContainer
