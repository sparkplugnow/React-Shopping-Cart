import React, { Component } from 'react';

class Title extends Component {
  render() {
    let animation;
     animation = <marquee>Welcome To Justrite</marquee>;
    return (
      <div className="App-title">
         {animation}
      </div>
    );
  }
}

export default Title;