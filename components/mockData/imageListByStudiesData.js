import { StarOutline, StarFilled } from '@icons/index'

const UpSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke="black"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
)

const DownSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke="black"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

export const ilTableColumnsByStudies = {
  selectable: true,
  expandable: true,
  data: [
    {
      field: 'accession_number',
      title: 'Accession number',
      sortable: true,
      //format the output data, expanding expandingHandler only available for expandable rows
      format: (value, _, expanding, expandingHandler) => (
        <span
          onClick={expandingHandler}
          style={{
            color: 'rgba(50, 121, 227, 1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '63.83px',
          }}
        >
          {value}
          {expanding !== undefined ? expanding ? <UpSvg /> : <DownSvg /> : null}
        </span>
      ),
    },
    {
      field: 'date',
      title: 'Date',
      sortable: true,
    },
    {
      field: 'quality',
      title: 'Quality',
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
      sortable: true,
      align: 'center',
      format: (value) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {value === true ? <StarFilled /> : <StarOutline />}
        </div>
      ),
    },
  ],
  subData: [
    {
      field: 'image',
      title: 'Image',
      sortable: true,
      format: (value) => (
        <span
          style={{
            color: 'rgba(50, 121, 227, 1)',
            cursor: 'pointer',
            paddingLeft: '10px',
          }}
          // onClick={() => setIsOpen((state) => !state)}
        >
          {value}
        </span>
      ),
    },
    {
      field: 'date',
      title: 'Date',
      sortable: true,
    },
    {
      field: 'quality',
      title: 'Quality',
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
      sortable: true,
      align: 'center',
      format: (value) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {value === true ? <StarFilled /> : <StarOutline />}
        </div>
      ),
    },
  ],
}
export const ilTableRowDataByStudies = [
  {
    id: 1,
    technologist: 'Centro comercial Moctezuma',
    image: 'Image_1',
    accession_number: 'AWC5174901DSA',
    date: '03.05.2022',
    view: 211,
    quality: 'Good',
    bad: 111,
    issues: '0',
    starred: true,
    select: 'hello',
    subData: [
      {
        id: 11,
        technologist: 'Centro comercial Moctezuma',
        image: 'Image_1',
        accession_number: 'AWC5174901DSA1',
        view: 211,
        quality: 'Perfect',
        bad: 111,
        issues: '1',
        starred: true,
        select: 'hello',
      },
      {
        id: 12,
        technologist: 'Centro comercial Moctezuma',
        image: 'Image_1',
        accession_number: 'AWC5174901DSA2',
        view: 211,
        quality: 'Perfect',
        bad: 111,
        issues: '0',
        starred: true,
        select: 'hello',
      },
      {
        id: 13,
        technologist: 'Centro comercial Moctezuma',
        image: 'Image_1',
        accession_number: 'AWC5174901DSA3',
        view: 211,
        quality: 'Perfect',
        bad: 111,
        issues: '0',
        starred: true,
        select: 'hello',
      },
    ],
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 2,
    technologist: 'Ame comercial Moctezuma',
    image: 'Image_2',
    accession_number: 'BWC5174901DSA',
    date: '03.05.2022',
    view: 511,
    quality: 'Perfect',
    bad: 11,
    issues: '0',
    starred: false,
    subData: [
      {
        id: 21,
        technologist: 'Centro comercial Moctezuma',
        image: 'Image_2',
        accession_number: 'BWC5174901DSA1',
        view: 211,
        quality: 'Perfect',
        bad: 111,
        issues: '1',
        starred: true,
        select: 'hello',
      },
      {
        id: 22,
        technologist: 'Centro comercial Moctezuma',
        image: 'Image_3',
        accession_number: 'BWC5174901DSA2',
        view: 211,
        quality: 'Perfect',
        bad: 111,
        issues: '0',
        starred: true,
        select: 'hello',
      },
      {
        id: 23,
        technologist: 'Centro comercial Moctezuma',
        image: 'Image_4',
        accession_number: 'BWC5174901DSA3',
        view: 211,
        quality: 'Perfect',
        bad: 111,
        issues: '0',
        starred: true,
        select: 'hello',
      },
    ],
    positioning_issues: 'IMF not open',
  },
  {
    id: 3,
    technologist: 'asd ercial Moctezuma',
    image: 'Image_3',
    accession_number: 'CWC5174901DSA',
    date: '03.05.2022',
    view: 311,
    quality: 'Good',
    bad: 511,
    issues: '1',
    starred: false,
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 4,
    technologist: 'MM comercial Moctezuma',
    image: 'Image_4',
    accession_number: 'DWC5174901DSA',
    date: '03.05.2022',
    view: 311,
    quality: 'Good',
    bad: 511,
    issues: '1',
    starred: true,
    positioning_issues: 'Nipple not in midline',
  },
  {
    id: 5,
    technologist: 'SS comercial Moctezuma',
    image: 'Image_5',
    accession_number: 'EWC5174901DSA',
    date: '03.05.2022',
    view: 311,
    quality: 'Perfect',
    bad: 511,
    issues: '0',
    starred: false,
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 6,
    technologist: 'Lop comercial Moctezuma',
    image: 'Image_6',
    accession_number: 'FWC5174901DSA',
    date: '03.05.2022',
    view: 311,
    quality: 'Perfect',
    bad: 511,
    issues: '1',
    starred: false,
    positioning_issues: 'Droopy breast',
  },
  {
    id: 7,
    technologist: 'Lop comercial Moctezuma',
    image: 'Image_7',
    accession_number: 'GWC5174901DSA',
    date: '03.05.2022',
    view: 311,
    quality: 'Perfect',
    bad: 511,
    issues: '1',
    starred: false,
    positioning_issues: 'Not enough muscle',
  },
  {
    id: 8,
    technologist: 'Lop comercial Moctezuma',
    image: 'Image_8',
    accession_number: 'HWC5174901DSA',
    date: '03.05.2022',
    view: 311,
    quality: 'Perfect',
    bad: 511,
    issues: '0',
    starred: false,
    positioning_issues: 'IMF not open',
  },
]
export const ilTableSettingsByStudies = {
  last_child_no_border: false,
  header_border_bottom_color: '#e1e1e1',
  header_bg_color: '#EDEFF5',
}
