import React from 'react';
import Table from '@components/common/Table/Table'

const TLlistSite = ( { columns, rows, settings } ) => {
  return (
    <div className='flow'>
      <Table columns={columns} rows={rows} settings={settings} />
    </div>
  )
}

export default TLlistSite
