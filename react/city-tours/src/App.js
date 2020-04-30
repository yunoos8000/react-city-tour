import React, { Component } from 'react';
import './App.scss';
import TourList from './components/TourList/TourList'

import Navbar from './components/Navbar/Navbar';

class App extends Component{

  render(){
    return(<div>
      <Navbar/>
    
      <TourList />
    </div>);
  }


}
export default App;
