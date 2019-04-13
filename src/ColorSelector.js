import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
  
  constructor(props) {
    super(props)
    this.state = {
      color: "#F00"
    }
  }
      
  this.setSelectedColor = (str) => {
    color: this.props.str
  } 
  
  
  
  onClick = () => {
  this.props.onClick({setSelectedColor(str)})
  }
      
      return <div key={idx} onClick={this.onClick} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}


      const cb = () => { this.props.setSelectedColor(str) }
      return <div key={idx} onClick={this.onClick} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
  
setSelectedColor = (str) => {
  color: this.props.str
}

onClick = () => {
  this.props.onClick({setSelectedColor(str)})
}

return <div