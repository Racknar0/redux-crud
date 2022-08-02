import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions.js';

const NuevoProducto = () => {
    let navigate = useNavigate();
    //State del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');

    // utilizar dispatch y te crea una nueva funcion
    const dispatch = useDispatch();

    // acceder al state del store
    const cargando = useSelector((state) => state.productos.loading);
    const error = useSelector((state) => state.productos.error);

    //mandar llamar action de productoAction
    const agregarProducto = (producto) =>
        dispatch(crearNuevoProductoAction(producto));

    //Cuando se haga submit
    const submitNuevoProducto = (e) => {
        e.preventDefault();

        //Validar Form
        if (nombre.trim() === '' || precio <= 0) {
            return;
        }

        //Si no hay errores

        // Crear el nuevo producto
        agregarProducto({
            nombre,
            precio,
        });

        // Redireccionar
        navigate('/');
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={(e) =>
                                        guardarNombre(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={(e) =>
                                        guardarPrecio(Number(e.target.value))
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary fw-bold text-uppercase d-block w-100"
                            >
                                Agregar Producto
                            </button>
                            {cargando ? <p>Cargando...</p> : null}
                            {error ? (
                                <p className="alert alert-danger p2 mt-4 text-center">
                                    Hubo un error
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;
