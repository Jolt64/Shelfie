import React, { Component } from "react";
import Product from "../Product/Product";

class Dashdoard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div>Dashdoard</div>
        <div>
          {this.props.products.map(item => {
            return (
            <Product 
            item={item} 
            key={item.id}
            deleteProduct={this.props.deleteProduct} 
            updateEditingId={this.props.updateEditingId}
            />);
          })}
        </div>
      </div>
    );
  }
}

export default Dashdoard;
