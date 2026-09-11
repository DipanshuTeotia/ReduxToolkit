import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
  const dispatch=useDispatch();
  const [text, setText] = useState('');
  const submitHandler=(e)=>{
    // console.log(`submitting`)
    e.preventDefault();
    dispatch(setQuery(text));
    setText('');
  }
  return (
    <div className='bg-gray-500 p-4'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='flex justify-between gap-2'>
        <input
        value={text}
        onChange={(e)=>{
            setText(e.target.value);
        }}
        className='border-2 rounded px-2 py-1 w-full outline-none' type="text" placeholder='Search anything...' />
        <button className='border-2 rounded px-2 py-1 outline-none'>search</button>
      </form>
    </div>
  )
}

export default SearchBar
