import React, { Component } from "react";

class Product extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { name, price, img } = this.props.item;
    let picStyles = { width: "100px" };
    let imgHolder =
      "http://chittagongit.com//images/no-profile-pic-icon/no-profile-pic-icon-5.jpg";
    if (img) {
      imgHolder = img;
    }
    return (
      <div className="App">
        <div>Product</div>
        <div>
          <h1>{name}</h1>
          <h3>{`$${price}`}</h3>
          <img src={imgHolder} alt={name} style={picStyles} />
        </div>
      </div>
    );
  }
}

export default Product;
