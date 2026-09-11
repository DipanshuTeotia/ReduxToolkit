import React from 'react'
import { fetchPhotos, fetchVideo } from './api/mediaapi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <SearchBar/>
      <Tabs/>
    </div>
  )
}

export default App
