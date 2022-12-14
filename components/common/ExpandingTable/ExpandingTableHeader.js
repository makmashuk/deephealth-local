import React, { useState } from 'react'
import { StarredTooltip } from '@components/common/Tooltip/StarredTooltip'
import { Info } from '@icons/index'

const arrowDown = (
  <svg
    clipRule="evenodd"
    height={'1rem'}
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z"
      fillRule="nonzero"
    />
  </svg>
)
const arrowUp = (
  <svg
    clipRule="evenodd"
    height={'1.1rem'}
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
      fillRule="nonzero"
    />
  </svg>
)

export default function ExpandingTableHeader({
  columns,
  rows,
  selected,
  sortableFields,
  setSortableFields,
  selectAll,
  settings,
}) {
  const [tooltip, setTooltip] = useState(false)

  const InfoIcon = () => {
    return (
      <span
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        <Info />
      </span>
    )
  }

  const handleIconForSortable = (item) => {
    const indexOflement = sortableFields.findIndex(
      (el) => el.name === item.field
    )

    if (item.sortable) {
      const sortingOrder = sortableFields.find((el) => el.name === item.field)
      if (indexOflement > -1) {
        if (sortingOrder.order === 'ASC') return arrowDown
        if (sortingOrder.order === 'DSC') return arrowUp
      }
      return arrowDown
    }
  }

  const handleRowClick = (newField) => {
    // toggoling sorting order
    const indexOfElement = sortableFields.findIndex(
      (item) => item.name === newField.name
    )
    if (indexOfElement > -1) {
      if (sortableFields[indexOfElement].order === 'DSC') {
        newField.order = 'ASC'
      }
      if (sortableFields[indexOfElement].order === 'ASC') {
        newField.order = 'DSC'
      }

      const updatedList = [...sortableFields]
      updatedList.splice(indexOfElement, 1)
      updatedList.push(newField)
      setSortableFields([...updatedList])
    } else {
      newField.order = 'ASC'
      setSortableFields((fields) => [...fields, newField])
    }
  }

  const handleSorting = (item) => {
    if (item.sortable) {
      let field = { name: item.field }
      handleRowClick(field)
    }
  }
  return (
    <>
      <tr>
        {columns.data.map((item, i) => {
          return (
            <th
              key={i}
              onClick={() => handleSorting(item)}
              style={{
                width: item.width,
              }}
            >
              <div
                className="d--f ai--c fw-bold"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#6A6E83',
                  gap: '0.25rem',
                  justifyContent: item.align ? item.align : 'left',
                }}
              >
                {item.box && item.box}
                {item.title}
                {handleIconForSortable(item)}
                {item.title == 'Starred' ? <InfoIcon /> : ''}
              </div>
            </th>
          )
        })}
        {columns.selectable ? (
          <th>
            <input
              type="checkbox"
              onChange={selectAll}
              checked={selected.length === rows.length}
            />
          </th>
        ) : null}
      </tr>

      {tooltip && <StarredTooltip />}
    </>
  )
}

ExpandingTableHeader.defaultProps = {
  title: '',
  sortable: false,
  box: '',
}
