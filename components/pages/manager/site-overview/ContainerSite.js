import React from 'react'
import POViews from './POViews';
import POTable from './POTable'
import POAppbar from './POAppbar'
import POSummary from './POSummary'
import POTrending from './POTrending'

import POPositioningIssues from './POPositioningIssues'
import { Grid } from '@mui/material';
function ContainerSite() {
  return (
    <div>
      {/* <POSummary/> */}
      <Grid container padding={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
        <POViews/>
        </Grid>
        <Grid item xs={6}>
        <POTrending/>
        </Grid>
        <Grid item xs={3}>
          <POPositioningIssues/>
        </Grid>
        <Grid item xs={12}>
        <POTable/>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContainerSite