import React from 'react'
import { useSelector } from "react-redux";
import CollectionCard from '../components/CollectionCard';
const CollectionPage = () => {
  const collection = useSelector((state)=>state.collection.items);
  return (
    <div className='flex justify-start gap-3 flex-wrap overflow-auto h-[80%] w-full p-2'>
      {collection.map((item,idx)=>{
        return <div
         key={idx}> <CollectionCard item={item}/> </div>
      })}
    </div>
  )
}

export default CollectionPage
