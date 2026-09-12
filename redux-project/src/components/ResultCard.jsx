import React from 'react'

const ResultCard = ({item}) => {
  const addToCollection = (item)=>{
    const oldData = JSON.parse(localStorage.getItem('collection')) || [];
    const newData = [...oldData,item];
    localStorage.setItem("collection",JSON.stringify(newData));
    console.log(JSON.parse(localStorage.getItem("collection")));
  }
  return (
    <div className='h-80 w-[20vw] bg-white rounded-xl relative overflow-hidden'>

      <a target='_blank' className='h-full'  href={item.src}>
        {item.type=='photo' ? <img className='h-full w-full object-cover rounded-xl' src={item.src} alt="" /> : ''}
        {item.type == 'video' ? <video className='h-full w-full object-cover rounded-xl' autoPlay muted loop src={item.src} alt=""></video> : ''}
      </a>

      <div className='absolute bottom-0 flex justify-between items-center px-2 py-2 w-full text-white font-bold text-center overflow-hidden'>
        <h2 className='capitalize'>{item.title}</h2>
        <button
        onClick={()=>{
          addToCollection(item);
        }}
        className='bg-blue-500 px-3 py-1 rounded active:scale-90 justify-center items-center cursor-pointer'>Save</button>
      </div>

    </div>
  )
}

export default ResultCard
