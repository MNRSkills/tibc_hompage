import React from 'react'
import ReactPlayer from 'react-player';
import Selection from './selection';

const Video = (props) => {

  return (
    <div className={`${props.className} player-section`}> 
      <ReactPlayer url="https://www.youtube.com/watch?v=DyDfgMOUjCI" />
      <Selection className="player-section"/>

    </div>
  )
}

export default Video;