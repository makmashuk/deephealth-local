import { useState, useEffect } from 'react'

export const useSearchFilter = (baseData) => {
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

  return { searchResult, setSearchResult, handleSearch }
}

export const useClearSearchFilter = (basedata, clearingHandler, anchor) => {

  useEffect(() => {
    const clearSearch = setTimeout(() => {
      clearingHandler(basedata)
    }, 500)
    return () => {
      clearTimeout(clearSearch)
    }
  }, [anchor])
}