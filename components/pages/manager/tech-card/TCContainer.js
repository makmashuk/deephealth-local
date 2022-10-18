import React from 'react'
import TCViews from './TCViews';
import TCTable from './TCTable'
import TCTrending from './TCTrending'
import TCSummary from './TCSummary'
import TCPositioningIssues from './TCPositioningIssues'
import { Grid } from '@mui/material';

function ContainerSite() {
  return (
    <div>
      <TCSummary/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={3}>
        <TCViews/>
        </Grid>
        <Grid item xs={6}>
        <TCTrending/>
        </Grid>
        <Grid item xs={3}>
          <TCPositioningIssues/>
        </Grid>
        <Grid item xs={12} margin={2}>
          <TCTable/>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContainerSite