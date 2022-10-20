import React, { useContext } from 'react';
import Table from '@components/common/Table/Table'
import { TableRowContext } from '../../../../../contexts/TableRowContext'

const TLPracticeList = ( { columns, settings } ) => {
  const rows = useContext(TableRowContext)
  return (
    <div className="flow">
      <Table columns={columns} rows={rows} settings={settings} />
    </div>
  )
}

export default TLPracticeList
