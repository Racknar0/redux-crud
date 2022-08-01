import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NuevoProducto from './components/NuevoProducto';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';

//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Productos />} />
                        <Route
                            path="/productos/nuevo"
                            element={<NuevoProducto />}
                        />
                        <Route
                            path="/productos/editar/:id"
                            element={<EditarProducto />}
                        />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
