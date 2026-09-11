import React from 'react'
import { fetchPhotos, fetchVideo } from './api/mediaapi'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <SearchBar/>
    </div>
  )
}

export default App
