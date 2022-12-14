import React, { useState } from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import { TLBackButton, FilterFunnel } from '@icons/index'
import TLPracticeHeader from './TLPracticeHeader'
import TLPracticeList from './TLPracticeList'
import { useRouter } from 'next/router'

import {
  techListPracticeColumns,
  techListPracticeRowData,
  techListPracticeTableSettings,
} from '@components/mockData/techListPracticeData'

function TLPracticeContainer() {
  const router = useRouter()
  const [tableData, setTableData] = useState(techListPracticeRowData)

  const handleSearch = (e) => {
    e.preventDefault()
    let keyword = e.target.value

    setTimeout(() => {
      const filterSearch = techListPracticeRowData.filter((item) => {
        return (
          item.technologist.toLowerCase().includes(keyword.toLowerCase()) ||
          item.site.toLowerCase().includes(keyword.toLowerCase())
        )
      })
      console.log('filterSearch')
      console.log(filterSearch)
      setTableData(filterSearch)
    }, 2000)
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
                Technologists list
              </span>
            </Grid>

            <Grid item md={4} xs={12}></Grid>

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
                // onClick={handleDisplayFilters}
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
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TLPracticeList
            columns={techListPracticeColumns}
            rows={tableData}
            settings={techListPracticeTableSettings}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  )
}

export default TLPracticeContainer
