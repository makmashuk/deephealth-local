import React from "react"
import ExpandingTable from '@components/common/ExpandingTable/ExpandingTable'

const IListExpanded = ({ columns, rows, settings }) => {
  return (
    <ExpandingTable columns={columns} rows={rows} settings={settings} />
  )
}

export default IListExpanded