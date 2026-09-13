import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from '../components/CollectionCard';
import { clearCollection } from '../redux/features/collectionSlice';
const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state)=>state.collection.items);
  const clearAllCollection = ()=>{
    dispatch(clearCollection());
  }
  return (
    <div className='h-screen bg-black flex flex-col'>

      {collection.length > 0 ? 
        <div className='flex justify-between items-center px-3 py-2 shrink-0'>
          <h1 className='text-2xl font-bold'>Your Collection</h1>
          <button
            onClick={() => {
              clearAllCollection();
            }}
            className='text-xl font-medium bg-red-400 rounded p-1 hover:bg-red-500 transition-colors active:scale-90'>
            Clear Collection
          </button>
        </div> :
        <h1 className='text-2xl p-2 flex justify-center font-bold'>Collection Is Empty</h1> }


      <div className='m-1 p-2 flex justify-start gap-3 flex-wrap bg-black flex-1 overflow-auto'>
        {collection.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
