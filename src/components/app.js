import React, { useState,useEffect } from 'react';
import SearchBar from './searchbar';
import Youtube from '../api/youtube';
import VideoList from './videoList';
import VideoDetail from './detailvideo';
import '../css/app.css';


const App =()=>{
    const [text,setText]=useState('Akame Ga kill');
    const [videos,setVideos]=useState([]);
    const [selected,setSelected]=useState([]);
    

    
    useEffect(()=>{  
      
    (async()=>{
        
        const res=await Youtube.get('/search',{
            params:{
                type:'video',
                q:text
            }
        })
        setVideos(res.data.items);
        setSelected(res.data.items[4]);
        })()
    },[text])

    return(<div className="root-div">

        <div className="ui container app">
                      <SearchBar  onChange={setText}/> 
         </div>
        <div className="ui grid">
        <div className="ui row">
        <div className="ten wide column ">
        <VideoDetail selected={selected}/>
        </div>       
        <div className="five wide column videoDetails">
        <VideoList  videos={videos} selected={setSelected}/>
        </div> 
        </div>
        </div>
        
        
    </div>)
}

export default App;