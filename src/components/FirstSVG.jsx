import React, {Component} from 'react';

class FirstSVG extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect height="80" width="100" />
          <rect height="50" width="80" fill="white" />
        </svg>
      </div>
    )
  }
}

export default FirstSVG
