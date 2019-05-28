import { MOSTRAR_PRODUCTOS, MOSTRAR_PRODUCTO, GUARDAR_PRODUCTO, EDITAR_PRODUCTO } from "../actions/types";

const estadoInicial = {
  productos: []
};
export default function(state = estadoInicial, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return { ...state, productos: action.payload };
    case MOSTRAR_PRODUCTO:
      return { ...state, producto: action.producto };
    case EDITAR_PRODUCTO:
      const productos = state.productos;
      productos.forEach((p,i)=>{
        if (p.id==action.payload.id) {
          p.nombre = action.payload.nombre;
          p.precio = action.payload.precio;
        }
      })
      return {...state, }
    case GUARDAR_PRODUCTO:
      return { ...state, productos: [...state.productos, action.payload] };
    default:
      return state;
  }
}
