import React from "react";

const DetailVideo=({selected})=>{

    if(!selected.id)
    return(<div>Reconnecting..</div>)

    const videoSrc=`https://www.youtube.com/embed/${selected.id.videoId}`;
    return(<div>
        <div>
        <div className="ui embed">
            <iframe src={videoSrc} title={selected.snippet.title} />
        </div>
        <div className="ui segment">
            <h4 className="ui header"> {selected.snippet.title}</h4>
            <p>{selected.snippet.description}</p>
        </div>
    </div>
    </div>)
}

export default DetailVideo;