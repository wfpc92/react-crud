import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/Productos";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NoRuta from "./components/NoRuta";
import NuevoProducto from "./components/NuevoProducto";
import EliminarProducto from "./components/EliminarProducto";
import EditarProducto from "./components/EditarProducto";

// netlify deploy :PAra subir proyecto a un servidor 

class App extends React.Component {
  render() {
    return (
      <Provider store={store} className="container">
        <BrowserRouter>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/">Productos</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"> 
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/productos/nuevo">Nuevo Producto</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Productos</h1>
            <p className="lead">Esta aplicación crea, edita y elimina productos almacenados en un json-server db.</p>
          </div>
        </div>
          
            <Switch>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={NuevoProducto} />
              <Route exact path="/productos/eliminar/:id" component={EliminarProducto} />
              <Route exact path="/productos/editar/:id" component={EditarProducto} />
              <Route component={NoRuta} />
            </Switch>
            
        </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
