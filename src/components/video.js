import React from 'react';
import '../css/video.css'

const VideoItem=({video,selected})=>{

return(
    <div className="video-item item" onClick={()=>{selected(video)}}>
        <img className="ui image"
         src={video.snippet.thumbnails.medium.url}
         alt={video.snippet.title}/>
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
    </div>
)
}

export default VideoItem;