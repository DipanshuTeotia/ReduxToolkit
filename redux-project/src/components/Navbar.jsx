import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='flex justify-between items-center p-4 bg-gray-700'>
          <Link to='/' className='text-2xl'>Media Search</Link>
          <div className='flex gap-2 text-black'>
              <Link to='/' className='bg-white px-1 rounded'>Search</Link>
              <Link to='/collection' className='bg-white px-1 rounded'>Collection</Link>
          </div>
      </div>
  )
}

export default Navbar
