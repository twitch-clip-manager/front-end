import React, { Component } from 'react';
import Slider from 'react-slick'
import logo from './logo.svg';
import "./index.css";

let links = ['one', 'two', 'three', 'four', 'five', 'six']


class UiPanel extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVid = this.toggleVid.bind(this);
  }

toggleVid(name) {
    var x = document.getElementById(name);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  render() {
   return links.map(x => <button onClick={()=>this.toggleVid(x)}>{x}</button>);
  }
}

class Iframes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return links.map(x => <iframe id={x} src="https://clips.twitch.tv/embed?clip=TangentialVivaciousDelicataGivePLZ&autoplay=false&tt_medium=clips_embed&autoplay=false" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>);
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
      <UiPanel />
      <br />
      <Iframes />
      </div>
    );
  }
}

export default App;
