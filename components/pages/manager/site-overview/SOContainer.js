import React from 'react'
import SOViews from './SOViews';
import SOTable from './SOTable'
import SOTrending from './SOTrending'
import SOPositioningIssues from './SOPositioningIssues'
import { Grid } from '@mui/material';

function ContainerSite() {
  return (
    <div>
      <Grid container padding={2} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
        <SOViews/>
        </Grid>
        <Grid item xs={6}>
        {/* <SOTrending/> */}
        </Grid>
        <Grid item xs={3}>
          <SOPositioningIssues/>
        </Grid>
        <Grid item xs={12}>
          <SOTable/>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContainerSite