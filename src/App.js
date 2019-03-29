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
      editingId: null
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

  deleteProduct = (id) => {
    Axios.delete(`/api/product/${id}`).then(res => {
      this.getAllProducts()
    })
  }

  updateProduct = (name, price, img, id) => {
    console.log('finder', id);
    
    Axios.put(`/api/product/${id}`, {name, price, img}).then(res => {
      this.getAllProducts()
    })
  }

  updateEditingId = (id) => {
    this.setState({
      editingId: id
    })
  }

  resetEditingId = () => {
    this.setState({
      editingId: null
    })
  }


  render() {
    console.log('finder11',this.state.editingId);
    
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <section>
          <Form 
          addProduct={this.addProduct}
          editingId={this.state.editingId}
          resetEditingId={this.resetEditingId}
          updateProduct={this.updateProduct}

          />
        </section>
        <Dashboard 
        products={this.state.products}
        deleteProduct={this.deleteProduct}
        updateEditingId={this.updateEditingId}
        />

      </div>
    );
  }
}

export default App;
