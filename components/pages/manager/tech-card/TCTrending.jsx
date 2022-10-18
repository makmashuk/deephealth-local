import { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LineChart from '@components/common/Charts/LineChart'
import GroupButton from '@components/common/GroupButton/GroupButton'

const getChips = (filters) => {
  let chips = []

  if (filters.positionIssue.length > 0) {
    chips = [
      ...chips,
      {
        key: 'positionIssue',
        title: filters.positionIssue,
        value: filters.positionIssue,
      },
    ]
  }
  if (filters.view.length > 0) {
    chips = [
      ...chips,
      {
        key: 'view',
        title: filters.view,
        value: filters.view,
      },
    ]
  }
  if (filters.quality.length > 0) {
    chips = [
      ...chips,
      {
        key: 'quality',
        title: filters.quality,
        value: filters.view,
      },
    ]
  }

  return chips
}

export default function SOTrending() {
  const [positionIssue, setPositionIssue] = useState('')
  const [view, setView] = useState('')
  const [quality, setQuality] = useState('')

  const printButtonLabel = (event) => {
    console.log(event.target.name)
    //do some stuff here
  }

  return (
    <Card sx={{ minWidth: '520px', borderRadius: '12px' }}>
      <CardContent>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
        >
          <Grid item md={6}>
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '16px',
                color: '#44495B',
              }}
            >
              Trending
            </span>
          </Grid>
          <Grid item display="flex" justifyContent="flex-end" md={6}>
            <select
              style={{
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '16px',
                textAlign: 'right',
                color: '#A8B1CE',
              }}
              onChange={(e) => setView(e.target.value)}
            >
              <option value="">Select view</option>
            </select>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
          mt={3}
        >
          <Grid item md={3}>
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '12px',
                color: '#44495B',
              }}
            >
              This site: {'―'}
            </span>
          </Grid>
          <Grid item md={3}>
            <span
              style={{
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '12px',
                color: '#44495B',
              }}
            >
              Practice average: {'- - -'}
            </span>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="flex-start"
          alignItems="flex-end"
          spacing={0}
          mb={2}
        >
          <Grid item md={6} display="flex" justifyContent="space-between">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  background: '#796DFD',
                  width: '10px',
                  height: '10px',
                  borderRadius: '4px',
                }}
              ></div>
              <span
                style={{
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '12px',
                  color: '#44495B',
                }}
              >
                PNL diff {'>'} 1cm
              </span>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  background: '#FCC966',
                  width: '10px',
                  height: '10px',
                  borderRadius: '4px',
                }}
              ></div>
              <span
                style={{
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '12px',
                  color: '#44495B',
                }}
              >
                Pec not to PNL
              </span>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  background: '#6992FC',
                  width: '10px',
                  height: '10px',
                  borderRadius: '4px',
                }}
              ></div>
              <span
                style={{
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '12px',
                  color: '#44495B',
                }}
              >
                Nipple not in pr...
              </span>
            </Box>
          </Grid>

          <Grid item md={6} display="flex" justifyContent="flex-end">
            <GroupButton
              buttons={['Year', 'Quarter', 'Month', 'Week']}
              buttonOnClickHandler={printButtonLabel}
            />
          </Grid>
        </Grid>

        <LineChart />
      </CardContent>
    </Card>
  )
}
