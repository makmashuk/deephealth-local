import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { PieChart } from '@components/common/Charts/PieChart'

export default function SOViews() {
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
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
          <span
            style={{
              marginTop: '1rem',
              fontWeight: '700',
              fontSize: '14px',
              textAlign: 'center',
              color: '#44495B',
            }}
          >
            CC
          </span>
          <PieChart />
        </Box>
      </CardContent>
    </Card>
  )
}
