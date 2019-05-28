import { MOSTRAR_PRODUCTOS, MOSTRAR_PRODUCTO, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO } from "./types";
import axios from "axios";

const API_URL = 'https://my-json-server.typicode.com/wfpc92/productosbootcampdb';
// const API_URL = 'http://localhost:5000'

axios.defaults.baseURL = API_URL;

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("/productos");

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};

export const mostrarProducto = (id) => async dispatch => {
  const respuesta = await axios.get("/productos/"+id);

  dispatch({
    type: MOSTRAR_PRODUCTO,
    producto: respuesta.data
  });
};

export const guardarProducto = producto => async dispatch => {
  const respuesta = await axios.post(
    "/productos",
    producto
  );

  dispatch({
    type: GUARDAR_PRODUCTO,
    payload: respuesta.data
  });
};


export const eliminarProducto = idProducto => async dispatch => {
  const respuesta = await axios.delete(
    "/productos/"+idProducto
  );

  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: respuesta.data
  });
};

export const editarProducto = (producto) => async dispatch => {
  const respuesta = await axios.put("/productos/"+producto.id, producto);

  dispatch({
    type: EDITAR_PRODUCTO,
    payload: respuesta.data
  });
};
