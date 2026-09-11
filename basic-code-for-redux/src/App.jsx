import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmt, increment } from './redux/features/counterSlice';

const App = () => {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.value);
  const [num, setNum] = useState(0);
  return (
    <div className='h-screen w-full bg-black text-white'>
      <div className='flex flex-col p-4 gap-2'>
        
        <h1 className='text-5xl'>{count}</h1>
        
        <div className='flex gap-4 flex-wrap'>
          <button
          onClick={()=>{
            dispatch(increment());
          }}
          className='bg-gray-600 p-2 text-xl rounded-2xl'>Increment</button>

          <button
          onClick={()=>{
            dispatch(decrement());
          }}
          className='bg-gray-600 p-2 text-xl rounded-2xl'>Decrement</button>
          
          <input
          value={num}
          onChange={(e)=>{
            setNum(e.target.value);
          }}
          className='text-2xl border-2 p-2 rounded-2xl' type="number" name="" id="" placeholder='enter ur num'/>
          
          <button
          onClick={()=>{
            dispatch(increaseByAmt(Number(num)));
          }}
          className='bg-gray-600 p-2 text-xl rounded-2xl'>IncrementByAmt</button>
        </div>
      </div>
    </div>
  )
}

export default App
