import Table from '@components/common/Table/Table'
import { useRouter } from 'next/router'
import { StarOutline, StarFilled } from '../../../icons'

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

const settings = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
}

const SOTable = () => {
  const router = useRouter()
  return (
    <div className="flow">
      <Table columns={columns} rows={rawTableData} settings={settings} />
      <div className="mt-3 mb-3" style={{ textAlign: 'center' }}>
        <p
          onClick={() => router.push('/practice/techlist/summary/image')}
          className="cursor-pointer text-accent-400"
        >
          View more {'>'}
        </p>
      </div>
    </div>
  )
}

export default SOTable
