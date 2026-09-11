import React from 'react'
import { fetchPhotos, fetchVideo } from './api/mediaapi'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <button
      onClick={async ()=>{
        const data = await fetchPhotos('dog');
        console.log(data.data.results);
      }}
      className='m-4 p-1 bg-gray-500 rounded'>get photos</button>

      <button
      onClick={async()=>{
        const data =await fetchVideo('cat');
        console.log(data.data.videos);
      }}
      className='m-4 p-1 bg-gray-500 rounded'>get videos</button>
    </div>
  )
}

export default App
