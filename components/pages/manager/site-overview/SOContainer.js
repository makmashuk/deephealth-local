import React from 'react'
import SOViews from './SOViews';
import SOTable from './SOTable'
import SOTrending from './SOTrending'
import SOSummary from './SOSummary'
import SOPositioningIssues from './SOPositioningIssues'
import { Grid } from '@mui/material';

function ContainerSite() {
  return (
    <div>
      <SOSummary/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={3}>
        <SOViews/>
        </Grid>
        <Grid item xs={6}>
        <SOTrending/>
        </Grid>
        <Grid item xs={3}>
          <SOPositioningIssues/>
        </Grid>
        <Grid item xs={12} margin={2}>
          <SOTable/>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContainerSite