import React from "react";
import VideoChat from "./VideoChat"

class VideoChatContainer extends React.Component {

  state = {
    top: 250,
    left: 250,
    direction: -1
  }

  handleKeyDown = (e) => {
    switch(e.which) {
      case 87:
      case 38:
        this.setState(prevState => {
          return {top: prevState.top - 20 }
        })
        break;
      case 65:
      case 37:
        this.setState(prevState => {
          return {left: prevState.left - 20, direction: 1 }
        })
        break;
      case 83:
      case 40:
        this.setState(prevState => {
          return {top: prevState.top + 20 }
        })
        break;
      case 68:
      case 39:
        this.setState(prevState => {
          return {left: prevState.left + 20, direction: -1 }
        })
        break;
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", this.handleKeyDown)
  }

  render() {
    return (
      <div
        className="body"
        style={{
        "left": `${this.state.left}px`,
        "top": `${this.state.top}px`,
        "transform": `scaleX(${this.state.direction})`
      }}>
      	<div className="face">
          <div className="video-chat-container" >
            <VideoChat />
          </div>
      		<div className="left_ear"></div>
      		<div className="right_ear"></div>
      		<div className="nose"></div>
      	</div>
      	<div className="stomach">
      		<div className="left_leg"></div>
      		<div className="right_leg"></div>
      	</div>
      	<div className="tail"></div>
      </div>

    )
  }
}
export default VideoChatContainer
