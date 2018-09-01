import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: 'url(' + 'https://imgur.com/42JJADu.png' + ')',
          height: '500px',
          width: '500px',
        }}
      >
        Hello world
      </div>
    );
  }
}

export default App;
