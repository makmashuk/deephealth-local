import Table from '@components/common/Table/Table'
import SeeImagesIcon from '@components/common/Table/SeeImagesIcon'

const progressData = [
  {
    percentage: '50',
    color: '#27C052',
  },
  {
    percentage: '30',
    color: '#ABD84B',
  },
  {
    percentage: '20',
    color: '#DF6666',
  },
]

const rawTableData = [
  {
    id: 1,
    technologist: 'Jimmy Cutler',
    study_volume: 1534,
    avg_img_per_study: 1.5,
    avg_issues_per_image: 2.0,
    actions: <SeeImagesIcon />,
  },
  {
    id: 2,
    technologist: 'Wade Warren',
    study_volume: 2356,
    avg_img_per_study: 2.3,
    avg_issues_per_image: 1.7,
    actions: <SeeImagesIcon />,
  },
  {
    id: 3,
    technologist: 'Devon Lane',
    study_volume: 587,
    avg_img_per_study: 2.4,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIcon />,
  },
  {
    id: 4,
    technologist: 'Rosy Black',
    study_volume: 655,
    avg_img_per_study: 1.5,
    avg_issues_per_image: 1.2,
    actions: <SeeImagesIcon />,
  },
  {
    id: 5,
    technologist: 'Tiger Woods',
    study_volume: 432,
    avg_img_per_study: 3.2,
    avg_issues_per_image: 3.1,
    actions: <SeeImagesIcon />,
  },
  {
    id: 6,
    technologist: 'Adriana Smith',
    study_volume: 546,
    avg_img_per_study: 1.1,
    avg_issues_per_image: 1.5,
    actions: <SeeImagesIcon />,
  },
  {
    id: 7,
    technologist: 'Jane Forester',
    study_volume: 321,
    avg_img_per_study: 0.7,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIcon />,
  },
  {
    id: 8,
    technologist: 'Toby McGuire',
    study_volume: 518,
    avg_img_per_study: 0.8,
    avg_issues_per_image: 2.8,
    actions: <SeeImagesIcon />,
  },
]

const POTable = () => {
  const columns = [
    {
      field: 'technologist',
      title: 'Technologist',
      align: 'left',
      sortable: true,
    },
    {
      field: 'study_volume',
      title: 'Study Volume',
      align: 'right',
      sortable: true,
    },
    {
      field: 'avg_img_per_study',
      title: 'Avg. img/study',
      align: 'right',
      sortable: true,
    },
    {
      field: 'avg_issues_per_image',
      title: 'Avg. issues per image',
      align: 'right',
      sortable: true,
    },
    { field: 'actions', title: 'Actions', align: 'right', sortable: false },
  ]

  return (
    <div className="flow">
      <Table columns={columns} rows={rawTableData} />
      <div className="mt-3 mb-3" style={{ textAlign: 'center' }}>
        <p className="cursor-pointer text-accent-400">View more {'>'}</p>
      </div>
    </div>
  )
}

export default POTable
