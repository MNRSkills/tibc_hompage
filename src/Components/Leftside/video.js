import React from 'react'
import ReactPlayer from 'react-player';

const Video = (props) => {
  return (
    <div className={`${props.className}`}> 
      <ReactPlayer url="https://www.youtube.com/watch?v=DyDfgMOUjCI" />
    </div>
  )
}

export default Video;