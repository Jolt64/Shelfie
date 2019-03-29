import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    this.getAllProducts()
  }

  getAllProducts = () => {
    Axios.get('/api/products').then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  addProduct = (name, price, img) => {
    Axios.post('/api/product', {name, price, img}).then(res => {
    this.getAllProducts()
    })
  }



  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <section>
          <Form addProduct={this.addProduct}/>
        </section>
        <Dashboard products={this.state.products}/>

      </div>
    );
  }
}

export default App;
