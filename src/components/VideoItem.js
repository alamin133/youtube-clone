import React from 'react';
import './VideoItem.css';

export default function VideoItem({video,onVideoSelect}) {
    return (
        <div onClick={()=>onVideoSelect(video)} className="video-item item">
             <img className="image ui image" src={video.snippet.thumbnails.high.url}alt={"anay"}/>
            <div className="content">
              <div className="header">
              {video.snippet.title}
              </div>
            </div>
        </div>
    )
}
