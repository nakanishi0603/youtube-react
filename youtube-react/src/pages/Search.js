import React, { useEffect, useContext } from 'react'
import Layout from '../components/layout/Layout'
import { useLocation } from 'react-router-dom'
import { fetchSearchData } from '../apis'
import { Store } from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGriditem from '../components/VideoGridItem/VideoGridItem'
const Search = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const location = useLocation()
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')
    if (query) {
      await fetchSearchData(query).then((res) => {
        setGlobalState({ type: 'SET_SEARCHED', payload: { searched: res.data.items } })
      })
    }
  }
  useEffect(() => {
    setSearchResult()
  }, [])
  return (
    <Layout>
      <VideoGrid>
        {
          globalState.searched ? globalState.searched.map((search) => {
            return (
              <VideoGriditem
                id={search.id.videoId}
                key={search.id.videoId}
                src={search.snippet.thumbnails.medium.url}
                title={search.snippet.title} />
            )
          }) : <span>no data</span>
        }
      </VideoGrid>
    </Layout>
  )
}

export default Search