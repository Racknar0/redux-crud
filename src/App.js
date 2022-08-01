import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import NuevoProducto from './components/NuevoProducto';
import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";

 
function App() {
  return (
    <Router>
      <Header />
        <div className="container">
          <Routes >
            <Route path="/" element={<Productos/>}/>
            <Route path="/productos/nuevo" element={<NuevoProducto/>}/>
            <Route path="/productos/editar/:id" element={<EditarProducto/>}/>
          </Routes >
        </div>
    </Router>
  );
}
 
export default App;