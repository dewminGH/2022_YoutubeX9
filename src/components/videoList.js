import React from 'react';
import VideoItem from './video';


const VideoList=({videos,selected})=>{

    

       const RenderedList=videos.map(video=>{
        return(<VideoItem video={video} key={video.id.videoId}
         selected={selected}/>)
       })

   

    return(
        <div className="ui relaxed divided list">
          {RenderedList}
        </div>
    )

}

export default VideoList;
