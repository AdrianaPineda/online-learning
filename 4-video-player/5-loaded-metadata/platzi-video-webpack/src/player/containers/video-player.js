import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {

  state ={
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    lastVolume: 0,
    volume: 1,
    fullScreen: false
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    });
    
  }

  // This moves the video to the value position
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    const volume = event.target.value;
    this.video.volume = volume;
    // We could alternatively set a state for the volume and let the video handle 
    // it (in componentWillReceiveProps), but it add more logic in there

    this.setState({
      volume: volume
    })
  }

  handleVolumeIconClicked = () => {
    this.video.volume = this.state.lastVolume

    this.setState({
      lastVolume: this.state.volume,
      volume: this.state.volume === 0 ? this.state.lastVolume : 0,
    })
  }

  handleFullScreenClicked = event => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }
  
  setRef = element => {
    this.player = element
  }

  render() {
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title 
          title={this.props.title}
        />
        <Controls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume 
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeIconClicked={this.handleVolumeIconClicked}
            value={this.state.volume}
          />
          <FullScreen 
            handleFullScreenClicked={this.handleFullScreenClicked}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
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

// We are only using 2 videos, and if we click on a different title that has the same video it won't reload the video
// because react detects the src hasn't changed