import Table from '@components/common/Table/Table'
import ProgressLineMultiple from '@components/common/Charts/ProgressLineMultiple'

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
    progress: (
      <ProgressLineMultiple progressParts={progressData} height="2px" />
    ),
    site: 'USCF General Hospital',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 2,
    technologist: 'Wade Warren',
    site: 'Princeton Plainsborough',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 3,
    technologist: 'Devon Lane',
    site: 'Dallas General Hospital',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 4,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 5,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 6,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 7,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 8,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 9,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
  {
    id: 10,
    technologist: 'Rosy Black',
    site: 'Boston Radiology',
    perfect_images: '25%',
    good_images: '50%',
    bad_images: '25%',
    study_volume: 1534,
    avg_img_per_study: 1.5,
  },
]

const TLPracticeList = () => {
  const columns = [
    {
      field: 'technologist',
      title: 'Technologist',
      align: 'left',
      sortable: true,
      format: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ flex: 1 }}>{value}</span>
          <ProgressLineMultiple
            progressParts={progressData}
            height="2px"
            width="7em"
          />
        </div>
      ),
    },
    {
      field: 'site',
      title: 'Site',
      align: 'left',
      sortable: true,
    },
    {
      field: 'perfect_images',
      title: 'Perfect images',
      align: 'right',
      sortable: true,
    },
    {
      field: 'good_images',
      title: 'Good images',
      align: 'right',
      sortable: true,
    },
    {
      field: 'bad_images',
      title: 'Bad images',
      align: 'right',
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
  ]

  const settings = {
    last_child_no_border: false,
    header_border_bottom_color: '#e1e1e1',
    header_bg_color: '#EDEFF5',
  }
  return (
    <div className="flow">
      <Table columns={columns} rows={rawTableData} settings={settings} />
    </div>
  )
}

export default TLPracticeList
