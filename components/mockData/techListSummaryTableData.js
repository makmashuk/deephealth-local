import { StarOutline, StarFilled } from '@icons/index'

const StarOutlineWrapped = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StarOutline size={10} />
    </div>
  )
}

const StarFilledWrapped = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StarFilled size={10} />
    </div>
  )
}

export const techListSummaryTableRowData = [
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutlineWrapped />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutlineWrapped />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarFilledWrapped />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarFilledWrapped />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutlineWrapped />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarFilledWrapped />,
  },
  {
    images: 'Image_1',
    accession_number: 1534,
    date: '03.05.22',
    view: 'RMLO',
    issues: 2.0,
    action: <StarOutlineWrapped />,
  },
]

export const techListSummaryColumns = [
  {
    field: 'images',
    title: 'Images',
    align: 'left',
    sortable: true,
  },
  {
    field: 'accession_number',
    title: 'Accession Number',
    align: 'left',
    sortable: true,
  },
  {
    field: 'date',
    title: 'Date',
    align: 'left',
    sortable: true,
  },
  {
    field: 'view',
    title: 'View',
    align: 'left',
    sortable: true,
  },
  {
    field: 'issues',
    title: 'Issues',
    align: 'center',
    sortable: true,
  },
  { field: 'action', title: 'Flagged', align: 'center', sortable: true },
]

export const techListSummaryTableSettings = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
}
