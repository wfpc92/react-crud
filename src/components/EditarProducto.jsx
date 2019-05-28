import React, { Component } from "react";
import { connect } from "react-redux";
import { editarProducto, mostrarProducto } from "../actions/productosActions";

class EditarProducto extends Component {
  state = { nombre: "", precio: 0 };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.mostrarProducto(id).then(res=>{
      this.setState(this.props.producto)
    })
  }

  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  guardarCambios = () => {
    //Guardar el producto
    this.props.editarProducto(this.state).then(res=>{
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Editar Producto</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nombre</label>
          <input className="form-control" value={this.state.nombre} onChange={this.changeInput} name="nombre" type="text" id="exampleInputEmail1"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2">Precio</label>
          <input className="form-control" value={this.state.precio} onChange={this.changeInput} name="precio" type="text" id="exampleInputEmail2"/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.guardarCambios} className="btn btn-success">
            Editar
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    productos: state.productos.productos,
    producto: state.productos.producto
  };
};

export default connect(
  mapStateToProp,
  { editarProducto, mostrarProducto }
)(EditarProducto);
