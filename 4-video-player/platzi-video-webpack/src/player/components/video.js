import React, { Component } from 'react';

class Video extends Component {
  render() {
    return(
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
        />
      </div>
    )
  }
}

export default Video;

// Why is this a React component and not a functional component?
// Because this component has methods video.play, video.pause, video.stop
// as well as events (is it being paused)
// It is highly interactive: play, pause, stop