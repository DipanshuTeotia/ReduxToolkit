import React from 'react'
import { fetchPhotos, fetchVideo } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App
