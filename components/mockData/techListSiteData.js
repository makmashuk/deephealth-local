import SeeImagesIcon from '@components/common/Table/SeeImagesIcon'

const SeeImagesIconWrapped = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <SeeImagesIcon />
    </div>
  )
}

export const techListSiteRowData = [
  {
    id: 1,
    technologist: 'Jimmy Cutler',
    study_volume: 1534,
    avg_img_per_study: 1.5,
    avg_issues_per_image: 2.0,
    actions: <SeeImagesIconWrapped />,
    title: 'Nipple not in profile',
  },
  {
    id: 2,
    technologist: 'Wade Warren',
    study_volume: 2356,
    avg_img_per_study: 2.3,
    avg_issues_per_image: 1.7,
    actions: <SeeImagesIconWrapped />,
    title: 'Nipple not in midline',
  },
  {
    id: 3,
    technologist: 'Devon Lane',
    study_volume: 587,
    avg_img_per_study: 2.4,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIconWrapped />,
    title: 'Nipple not in profile',
  },
  {
    id: 4,
    technologist: 'Rosy Black',
    study_volume: 655,
    avg_img_per_study: 1.5,
    avg_issues_per_image: 1.2,
    actions: <SeeImagesIconWrapped />,
    title: 'Nipple not in midline',
  },
  {
    id: 5,
    technologist: 'Tiger Woods',
    study_volume: 432,
    avg_img_per_study: 3.2,
    avg_issues_per_image: 3.1,
    actions: <SeeImagesIconWrapped />,
    title: 'IMF not open',
  },
  {
    id: 6,
    technologist: 'Adriana Smith',
    study_volume: 546,
    avg_img_per_study: 1.1,
    avg_issues_per_image: 1.5,
    actions: <SeeImagesIconWrapped />,
    title: 'Not enough muscle',
  },
  {
    id: 7,
    technologist: 'Jane Forester',
    study_volume: 321,
    avg_img_per_study: 0.7,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIconWrapped />,
    title: 'IMF not open',
  },
  {
    id: 8,
    technologist: 'Toby McGuire',
    study_volume: 518,
    avg_img_per_study: 0.8,
    avg_issues_per_image: 2.8,
    actions: <SeeImagesIconWrapped />,
    title: 'IMF not open',
  },
  {
    id: 9,
    technologist: 'Toni Kroos',
    study_volume: 444,
    avg_img_per_study: 0.6,
    title: 'Droopy breast',
    actions: <SeeImagesIconWrapped />,
    avg_issues_per_image: 1.3,
    title: 'Droopy breast',
  },
  {
    id: 10,
    technologist: 'Fede Valverde',
    study_volume: 777,
    avg_img_per_study: 0.2,
    avg_issues_per_image: 2.8,
    actions: <SeeImagesIconWrapped />,
    title: 'Droopy breast',
  },
  {
    id: 11,
    technologist: 'Cristiano Ronaldo',
    study_volume: 878,
    avg_img_per_study: 0.8,
    avg_issues_per_image: 1.3,
    actions: <SeeImagesIconWrapped />,
    title: 'Not enough muscle',
  },
  {
    id: 12,
    technologist: 'John Doe',
    study_volume: 518,
    avg_img_per_study: 0.4,
    avg_issues_per_image: 2.8,
    actions: <SeeImagesIconWrapped />,
    title: 'Not enough muscle',
  },
]

export const techListSiteColumns = [
  {
    field: 'technologist',
    title: 'Technologist',
    align: 'left',
    sortable: true,
    routable: true,
  },
  {
    field: 'study_volume',
    title: 'Study Volume',
    align: 'right',
    sortable: true,
    routable: false,
  },
  {
    field: 'avg_img_per_study',
    title: 'Avg. img/study',
    align: 'right',
    sortable: true,
    routable: false,
  },
  {
    field: 'avg_issues_per_image',
    title: 'Avg. issues per image',
    align: 'right',
    sortable: true,
    routable: false,
  },
  {
    field: 'actions',
    title: 'Actions',
    align: 'left',
    sortable: false,
    routable: false,
  },
]

export const techListSiteTableSettings = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
  header_padding: '1rem',
}
