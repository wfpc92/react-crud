import React, { Component } from "react";
import { connect } from "react-redux";
import { guardarProducto } from "../actions/productosActions";
class NuevoProducto extends Component {
  state = { nombre: "", precio: 0 };

  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  guardarCambios = () => {
    //Guardar el producto
    this.props.guardarProducto(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h2>Agregar Producto</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nombre</label>
          <input className="form-control" onChange={this.changeInput} name="nombre" type="text" id="exampleInputEmail1"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2">Precio</label>
          <input className="form-control" onChange={this.changeInput} name="precio" type="text" id="exampleInputEmail2"/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.guardarCambios} className="btn btn-success">
            Guardar
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { guardarProducto }
)(NuevoProducto);
