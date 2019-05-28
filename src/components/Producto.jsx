import React, { Component } from "react";

class Producto extends Component {
  render() {
    const { producto } = this.props;
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{producto.nombre}</h5>
          <div className="text-right">
            <button className="btn btn-secondary text-right" onClick={()=>{
              this.props.editarProducto()
            }}>Editar</button>
            <button className="btn btn-danger " onClick={()=>{
              this.props.eliminarProducto()
            }}>Eliminar</button>
          </div>
        </div>
        <p className="mb-1">{producto.precio}</p>
      </div>
    );
  }
}

export default Producto;
