import React, { useState, useEffect, createContext } from 'react'
import SOViews from './SOViews'
import SOTable from './SOTable'
import SOTrending from './SOTrending'
import SOSummary from './SOSummary'
import SOPositioningIssues from './SOPositioningIssues'
import { Grid } from '@mui/material'

import {
  summaryOverviewTableColumns,
  summaryOverviewTableRowData,
  summaryOverviewTableSettings,
} from '@components/mockData/summaryOverviewTableData'

function ContainerSite() {
  const [tableData, setTableData] = useState(summaryOverviewTableRowData)

  return (
    <div>
      <SOSummary />
      <Grid
        paddingX={2}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <Grid item xs={3}>
          <SOViews />
        </Grid>
        <Grid item xs={6}>
          <SOTrending />
        </Grid>
        <Grid item xs={3}>
          <SOPositioningIssues />
        </Grid>
        <Grid item xs={12} marginY={2}>
          <SOTable
            columns={summaryOverviewTableColumns}
            rows={tableData}
            settings={summaryOverviewTableSettings}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ContainerSite
