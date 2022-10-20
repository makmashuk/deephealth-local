import React from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import { TLBackButton } from '@icons/index'
import TLPracticeHeader from './TLPracticeHeader'
import TLPracticeList from './TLPracticeList'
import { useRouter } from 'next/router'

function TLPracticeContainer() {
  const router = useRouter()
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
              // onClick={handleDisplayFilters}
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
          <TLPracticeList />
        </Grid>
      </Grid>
    </>
  )
}

export default TLPracticeContainer
