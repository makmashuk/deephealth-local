import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { PieChart } from '@components/common/charts/PieChart'
import { Grid } from '@mui/material'

export default function TCViews() {
  return (
    <Card sx={{ minWidth: 316, borderRadius: '12px' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              color: '#44495B',
            }}
          >
            Views
          </span>
          <select
            style={{
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '12px',
              textAlign: 'right',
              color: '#44495B',
            }}
          >
            <option value="">Nipple not in profile</option>
          </select>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: '0rem auto',
              }}
            >
              <span
                style={{
                  marginTop: '1rem',
                  fontWeight: '700',
                  fontSize: '14px',
                  textAlign: 'center',
                  color: '#44495B',
                }}
              >
                MLO
              </span>
              <PieChart />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: '0rem auto',
              }}
            >
              <span
                style={{
                  marginTop: '1rem',
                  fontWeight: '700',
                  fontSize: '14px',
                  textAlign: 'center',
                  color: '#44495B',
                }}
              >
                RMLO
              </span>
              <PieChart />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: '0rem auto',
              }}
            >
              <span
                style={{
                  marginTop: '1rem',
                  fontWeight: '700',
                  fontSize: '14px',
                  textAlign: 'center',
                  color: '#44495B',
                }}
              >
                LCO
              </span>
              <PieChart />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: '0rem auto',
              }}
            >
              <span
                style={{
                  marginTop: '1rem',
                  fontWeight: '700',
                  fontSize: '14px',
                  textAlign: 'center',
                  color: '#44495B',
                }}
              >
                RCLO
              </span>
              <PieChart />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
