import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.fragment>
        <Navbar/>
        <ProductList/>
        <Details/>
        <Cart/>
        <Default/>
      </React.fragment>
);
  }
}

export default App;
