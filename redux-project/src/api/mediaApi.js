import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos(query,page=1,per_page=20){
    // get the data from unsplash using axios 
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        // this query will tell what u asked for like cat or dog
        // page will tell which page 
        // per_page will limit the items u want from a page 
        params:{query,page,per_page},
        // header will tell us authorization -> client-id YOU_ACCESS_KEY
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return res.data;
}

export async function fetchVideo(query,per_page=15){
    const res =await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,per_page},
        headers: { Authorization: PEXELS_KEY}
    })
    return res.data;
}