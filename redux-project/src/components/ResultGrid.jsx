import React, { useEffect } from 'react'
import { fetchPhotos,fetchVideo } from "../api/mediaApi";
import { setQuery,setError,setResults,setActiveTab,setLoading } from "../redux/features/searchSlice";
import { useDispatch, useSelector } from 'react-redux';

const ResultGrid = () => {
    const dispatch = useDispatch();
    const {query,activeTab,results,loading,error}=useSelector((store)=>store.search);
    useEffect(()=>{
        if(!query){
            return;
        }
        const getData =async ()=>{
            try {
                dispatch(setLoading());
                let data = [];
                if (activeTab == 'photos') {
                    const response = await fetchPhotos(query);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full
                    }));
                }
                if (activeTab == 'videos') {
                    const response = await fetchVideo(query);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link
                    }));
                }
                // console.log(data)
                dispatch(setResults(data));
            } catch (err) {
                dispatch(setError(err.message));
            }           
        }
        getData();
    },[activeTab,query]);
    if(error){
        return <h1>Error</h1>
    }
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        {results.map((ele,idx)=>{
            return <h1 key={idx}>{ele.title}</h1>
        })}
    </div>
  )
}

export default ResultGrid
