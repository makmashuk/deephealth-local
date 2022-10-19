import { useState } from 'react'

export const useSearch = (baseData) => {
  const [searchResult, setSearchResult] = useState(baseData)

  const handleSearch = (e) => {
    const searchStr = e.target.value.trim().toLowerCase()
    setSearchResult(baseData.filter(data => (
      data[Object.keys(data)[1]]
        .trim()
        .toLowerCase()
        .includes(searchStr)
    )))
  }

  return { searchResult, handleSearch }
}