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

  const router = useRouter();
  return (
    <>
      <TLPracticeHeader />
      <Grid
        container
        padding={2}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      ><Grid item xs={12}>
        </Grid>

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
              <TLBackButton onClick={()=> router.push('/')} />
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
            <Grid
              item
              xs={1}
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <Button
                style={{
                  padding: '4px 8px',
                  background: '#6992FC',
                  borderRadius: '12px',
                  color: 'white',
                  textTransform: 'none',
                  width: '100%',
                }}
              >
                <Icon.Filter size={16} />
                &nbsp;&nbsp;&nbsp;Filters
              </Button>
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
