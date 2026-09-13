import React from 'react'
import { fetchPhotos, fetchVideo } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
