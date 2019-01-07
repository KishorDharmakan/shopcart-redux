import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductApp from './components/Main/ProductApp';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import BreadCrumb from '../src/components/BreadCrumb/BreadCrumb';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">        
          <Header />
          <BreadCrumb />
          <div className="row"><ProductApp /></div>
          <Link to="/products/new" className="btn btn-primary add-product-button" > Add Product </Link>          
          <Footer />
        </div>
    );
  }
}

export default App;
