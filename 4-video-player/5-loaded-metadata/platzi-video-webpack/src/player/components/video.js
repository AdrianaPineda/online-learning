import React, { Component } from 'react';

class Video extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.pause != this.props.pause) {
      this.togglePlay();
    }
  }

  togglePlay() {
    if (this.props.pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  setRef = element => {
    this.video = element
  }

  render() {
    const { handleLoadedMetadata } = this.props;
    
    return(
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
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