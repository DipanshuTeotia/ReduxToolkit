import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomePage = () => {
  const {query}=useSelector((store)=>store.search);
  return (
      <div className='h-screen w-full bg-black text-white'>
        <SearchBar />
          {query != "" ? <div className='h-full w-full bg-black text-white'>
                            <Tabs />
                            <ResultGrid />
                        </div> : ""}
      </div>
  )
}

export default HomePage
