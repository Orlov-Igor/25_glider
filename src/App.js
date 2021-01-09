import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Gallery from './Glide/Gallery'


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Gallery />
      </div>
    )
  }
}

export default App;
