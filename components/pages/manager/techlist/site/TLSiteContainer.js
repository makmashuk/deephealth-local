import React from 'react'
import { Grid } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import * as Icon from 'react-feather'
import { Close } from '@icons/index'
import Button from '@mui/material/Button'

import { TLBackButton, Trash } from '@icons/index'

import SOTable from '@components/pages/manager/site-overview/SOTable'
import FilterExpanded from './FilterExpanded'

const tech_list = [
  {
    id: '1',
    name: 'Nipple not in profile',
    is_checked: true,
  },
  {
    id: '2',
    name: 'Nipple not in midline',
    is_checked: false,
  },
  {
    id: '3',
    name: 'Droopy breast',
    is_checked: false,
  },
  {
    id: '4',
    name: 'Not enough muscle',
    is_checked: false,
  },
  {
    id: '5',
    name: 'IMF not open',
    is_checked: false,
  },
]

function TLSiteContainer() {
  const handleOnClickClose = (e) => {
    e.preventDefault()
    console.log('close clicked')
    // console.log(e)
  }

  return (
    <div>
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
              md={6}
              xs={6}
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
            <Grid item xs={1}>
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
                  5
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {tech_list.map((tech, index) => (
              <Button
                key={index}
                style={{
                  background: '#EDEFF5',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  color: '#6A6E83',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '12px',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: '#EDEFF5',
                    color: '#6A6E83',
                  },
                  margin: '0 12px 0 0',
                }}
              >
                {tech.name}&nbsp;&nbsp;
                <span onClick={handleOnClickClose}>
                  <Close size={10} />
                </span>
              </Button>
            ))}

            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '14px',
                color: '#FF5B51',
              }}
            >
              Clear All&nbsp;&nbsp;
              <Trash size={14} color={'#FF5B51'} />
            </span>
          </div>
        </Grid>

        <Grid item xs={12}>
          <SOTable />
        </Grid>

        <Grid item xs={12}>
          {/* <FilterExpanded data={tech_list} /> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default TLSiteContainer
