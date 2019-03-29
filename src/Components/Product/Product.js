import React, { Component } from "react";

class Product extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { name, price, img, id } = this.props.item;
    let picStyles = { width: "100px" };
    let imgHolder =
      "http://chittagongit.com//images/no-profile-pic-icon/no-profile-pic-icon-5.jpg";
    if (img) {
      imgHolder = img;
    }
    return (
      <div className="App">
        <div>
          <h1>{name}</h1>
          <h3>{`$${price}`}</h3>
          <img src={imgHolder} alt={name} style={picStyles} />
          <div>
              <button onClick={() => this.props.deleteProduct(id)}>Delete</button>
              <button onClick={() => this.props.updateEditingId(this.props.item.id)}>Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
