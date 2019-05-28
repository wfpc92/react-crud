import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productosActions";
import Producto from "./Producto";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }
  render() {
    const { productos } = this.props;

    return (
      <div className="">
        <div className="d-flex w-100 justify-content-between">
          <h2 className="mb-1">Listado de productos</h2>
          <div className="text-right">
            <button className="btn btn-success" onClick={()=>{
              this.props.history.push("/productos/nuevo");
            }}>Crear producto</button>
          </div>
        </div>
        <a className="list-group">
          {
            productos && productos.map((producto, index) => {
              return <Producto key={index} producto={producto} eliminarProducto={() => {
                this.props.history.push("/productos/eliminar/" + producto.id);
              }} editarProducto={() => {
                this.props.history.push("/productos/editar/" + producto.id);
              }}/>;
            })
          }
        </a>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    productos: state.productos.productos
  };
};

export default connect(
  mapStateToProp,
  { mostrarProductos }
)(Productos);
