// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component{


  handleClick = (event)=>{
    let coorArr = [];
    coorArr.push(event.clientX);
    coorArr.push(event.clientY);
    this.props.onReceiveCoordinates(coorArr);
  }

  render(){
    return (
      <button onClick={this.handleClick}>Click me</button>
    )
  }



}

export default CoordinatesButton
