import React, { useContext } from 'react';
import Table from '@components/common/Table/Table'
import { useRouter } from 'next/router'
import { TableRowContext } from '@contexts/TableRowContext'

const TCTable = ({ columns, settings }) => {
  const router = useRouter()
  const rows = useContext(TableRowContext)
  return (
    <div className="flow">
      <Table columns={columns} rows={rows} settings={settings} />
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

export default TCTable
