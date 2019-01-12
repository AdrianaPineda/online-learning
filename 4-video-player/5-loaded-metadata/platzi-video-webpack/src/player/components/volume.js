import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return(
    <button
      className="Volume"
    >
      <div
        onClick={props.handleVolumeIconClicked}
      >
        <VolumeIcon 
          color="white"
          size={25}
        />
      </div>
      <div className="Volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}
// The volume inside media elements in HTML5 works with values between 0 and 1

export default Volume;