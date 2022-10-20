import Table from '@components/common/Table/Table'

const TLlist = ( { columns, rows, settings } ) => {
  return (
    <div className='flow'>
      <Table columns={columns} rows={rows} settings={settings} />
    </div>
  )
}

export default TLlist
