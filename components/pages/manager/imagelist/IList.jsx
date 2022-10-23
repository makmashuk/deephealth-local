import React from 'react'
import Table from '@components/common/Table/Table'

const IList = ({columns, rows, settings}) => {
  return (
    <Table
      columns={columns}
      rows={rows}
      settings={settings}
    />
  )
}

export default IList