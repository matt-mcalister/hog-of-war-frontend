import React from "react";

class VideoChat extends React.Component {
  state = {
    source: ""
  }

  componentDidMount(){
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
      .then(this.grantedCameraAccess)
      .catch(this.handleMediaError)
  }

  grantedCameraAccess = (stream) => {
    this.setState({
      source: window.URL.createObjectURL(stream)
    })
  }


  handleMediaError = (err) => {
    console.log(err)
    alert("bummer!")
  }

  render() {
    return (
      <video className="video-chat" src={this.state.source} autoPlay="true">
      </video>
    )
  }
  }
export default VideoChat
