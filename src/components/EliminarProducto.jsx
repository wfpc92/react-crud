import React, { Component } from 'react'
import { connect } from "react-redux";
import { eliminarProducto } from "../actions/productosActions";

class EliminarProducto extends Component {
  render() {
    const {id} = this.props.match.params;
    
    return (
      <div className="container">
        <h2 className="">Eliminar Producto</h2>
        Seguro que desea eliminar producto (id={id}) 
        <button className="btn btn-danger" onClick={() => {
          this.props.eliminarProducto(id).then(res=>{
            this.props.history.push("/");
          })
        }}>Eliminar</button>
      </div>
    )
  }
}

export default connect(
  null,
  { eliminarProducto }
)(EliminarProducto);