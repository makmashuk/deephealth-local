import React, { useState, useEffect, createContext } from 'react'
import TCViews from './TCViews'
import TCTable from './TCTable'
import TCTrending from './TCTrending'
import TCSummary from './TCSummary'
import TCPositioningIssues from './TCPositioningIssues'
import { Grid } from '@mui/material'
import { StarOutline, StarFilled } from '@components/icons'

const rawTableData = [
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutline size={10} />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutline size={10} />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutline size={10} />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutline size={10} />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutline size={10} />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarFilled size={10} />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutline size={10} />,
  },
]
const columns = [
  {
    field: 'images',
    title: 'Images',
    align: 'left',
    sortable: true,
  },
  {
    field: 'accession_number',
    title: 'Accession Number',
    align: 'right',
    sortable: true,
  },
  {
    field: 'date',
    title: 'Date',
    align: 'right',
    sortable: true,
  },
  {
    field: 'view',
    title: 'View',
    align: 'right',
    sortable: true,
  },
  {
    field: 'issues',
    title: 'Issues',
    align: 'right',
    sortable: true,
  },
  { field: 'action', title: 'Flagged', align: 'center', sortable: false },
]
const tableSettings = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
}

function ContainerSite() {
  const [tableData, setTableData] = useState(rawTableData)

  return (
    <div>
      <TCSummary />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={3}>
          <TCViews />
        </Grid>
        <Grid item xs={6}>
          <TCTrending />
        </Grid>
        <Grid item xs={3}>
          <TCPositioningIssues />
        </Grid>
        <Grid item xs={12} margin={2}>
          <TCTable columns={columns} rows={tableData} settings={tableSettings} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ContainerSite
