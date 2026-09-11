import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs=['photos','videos'];
    const dispatch=useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className='flex gap-3 mt-3 px-4'>   
        {tabs.map((ele,idx)=>{
            return <button
            onClick={()=>{
                dispatch(setActiveTab(ele))
            }}
            className={`${activeTab==ele ? 'bg-blue-500' : 'bg-gray-500'} p-1 rounded active:scale-95 transition`} key={idx}
            >{ele}</button>
        })}
    </div>
  )
}

export default Tabs
