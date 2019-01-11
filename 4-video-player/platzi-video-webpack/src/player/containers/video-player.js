import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {

  state ={
    pause: true
  }

  render() {
    return(
      <VideoPlayerLayout>
        <Title 
          title="This is a cool video"
        />
        <PlayPause 
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Video 
          autoplay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
}

export default VideoPlayer;