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

export const ilTableColumnsByImages = [
  {
    field: 'images',
    title: 'Images',
    align: 'left',
    sortable: true,
  },
  {
    field: 'accession_number',
    title: 'Accession number',
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
  {
    field: 'starred',
    title: 'Starred',
    align: 'center',
    sortable: true,
  },
]

export const ilTableRowDataByImages = [
  {
    id: 1,
    images: 'Image_1',
    accession_number: 'BWC5174901DSA',
    date: '03.05.2022',
    view: 'RMLO',
    issues: '0',
    starred: <StarOutlineWrapped />,
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 2,
    images: 'Image_2',
    accession_number: 'ZUH291076825321',
    date: '02.05.2022',
    view: 'RMLO',
    issues: '0',
    starred: <StarFilledWrapped />,
    positioning_issues: 'IMF not open',
  },
  {
    id: 3,
    images: 'Image_3',
    accession_number: 'DQO098271492753',
    date: '01.05.2022',
    view: 'LMLO',
    issues: '1',
    starred: <StarOutlineWrapped />,
    positioning_issues: 'IMF not open',
  },
  {
    id: 4,
    images: 'Image_4',
    accession_number: 'MT2QS8219312912010',
    date: '28.04.2022',
    view: 'LMLO',
    issues: '2',
    starred: <StarOutlineWrapped />,
    positioning_issues: 'Droopy breast',
  },
  {
    id: 5,
    images: 'Image_5',
    accession_number: 'DQO098271492753',
    date: '27.05.2022',
    view: 'LCC',
    issues: '2',
    starred: <StarFilledWrapped />,
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 6,
    images: 'Image_6',
    accession_number: 'MT2QS8219312912010',
    date: '27.05.2022',
    view: 'LMLO',
    issues: '2',
    starred: <StarFilledWrapped />,
    positioning_issues: 'Nipple not in midline',
  },
]

export const ilTableSettingsByImages = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
  header_padding: '1rem',
}
