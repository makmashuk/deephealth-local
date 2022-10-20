import React, { useState, useEffect, createContext } from 'react'
import TCViews from './TCViews'
import TCTable from './TCTable'
import TCTrending from './TCTrending'
import TCSummary from './TCSummary'
import TCPositioningIssues from './TCPositioningIssues'
import { Grid } from '@mui/material'
import { StarOutline, StarFilled } from '@components/icons'
import { TableRowContext } from '@contexts/TableRowContext'

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
  const handleSearch = (e) => {
    console.log('handleSearch')
    let keyword = e.target.value
    console.log(keyword)

    const filterSearch = rawTableData.filter((item) => {
      return (
        item.technologist.toLowerCase().includes(keyword.toLowerCase()) ||
        item.site.toLowerCase().includes(keyword.toLowerCase())
      )
      // item.study_volume.toLowerCase().includes(keyword.toLowerCase()) ||
      // item.avg_img_per_study.toLowerCase().includes(keyword.toLowerCase()) ||
      // item.avg_issues_per_image.toLowerCase().includes(keyword.toLowerCase())
    })
    console.log('filterSearch')
    console.log(filterSearch)
    setTableData(filterSearch)
  }

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
          <TableRowContext.Provider value={tableData}>
            <TCTable columns={columns} settings={tableSettings} />
          </TableRowContext.Provider>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContainerSite
