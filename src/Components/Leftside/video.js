import React from 'react'
import ReactPlayer from 'react-player';
import Selection from './selection';

const Video = (props) => {

  return (
    <div className={`${props.className} player-section`}> 
      <ReactPlayer url="" />
      <Selection className="player-section"/>

    </div>
  )
}

export default Video;