import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: "",
      img: "",
      imgHolder:
        "http://chittagongit.com//images/no-profile-pic-icon/no-profile-pic-icon-5.jpg"
    };
  }

  inputChangeHandler = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  };

  clearInputsHandler = () => {
    this.setState({
      name: "",
      price: "",
      img: ""
    });
    this.props.resetEditingId()
  };

  newProductHandler = () => {
    const { name, price, img } = this.state;
    this.props.addProduct(name, price, img);
    this.clearInputsHandler();
  };

  updateProductHandler = () => {
    const { name, price, img } = this.state;
    const { id } = this.props.editingId;
    console.log(this.props.editingId);
    this.props.updateProduct(name, price, img, id);
  }

  render() {
      let imgHolder = 'http://chittagongit.com//images/no-profile-pic-icon/no-profile-pic-icon-5.jpg'
      if(this.state.img){
          imgHolder = this.state.img
      }
      let editHolder = <button onClick={this.newProductHandler}>Add</button>
      if(this.props.editingId) {
          editHolder = <button onClick={this.updateProductHandler}>Update</button>
      }
    return (
      <div className="App">
        <img
          src={imgHolder}
          alt={"place Holder"}
        />
        <div>Form</div>
        <input
          value={this.state.name}
          placeholder="name"
          onChange={e => this.inputChangeHandler(e, "name")}
        />
        <input
          value={this.state.price}
          placeholder="price"
          onChange={e => this.inputChangeHandler(e, "price")}
        />
        <input
          value={this.state.img}
          placeholder="Image"
          onChange={e => this.inputChangeHandler(e, "img")}
        />
        {editHolder}
        <button onClick={this.clearInputsHandler}>Cancel</button>
      </div>
    );
  }
}

export default Form;
