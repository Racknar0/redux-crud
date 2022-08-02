import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import { useDispatch } from 'react-redux';
import {
    borrarProductoAction,
    obtenerProductoEditar,
} from '../actions/productoActions';

const Producto = ({ producto }) => {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Confirmar si se elimina el producto
    const confirmarEliminarProducto = (id) => {
        // confirmar con el usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Una vez eliminado, no podras recuperarlo',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.value) {
                // si el usuario confirma, se ejecuta el dispatch
                dispatch(borrarProductoAction(id));
            }
        });
    };

    // Funcion que redireccionar de forma programada
    const redireccionarEdicion = (producto) => {
        dispatch(obtenerProductoEditar(producto));
        navigate(`/productos/editar/${producto.id}`);
    };

    return (
        <tr>
            <td>{nombre}</td>
            <td>
                {' '}
                <span className="font-weight-bold"> $ {precio} </span>
            </td>
            <td className="acciones">
                <button
                    type="button"
                    onClick={() => {
                        redireccionarEdicion(producto);
                    }}
                    to={`/productos/editar/${id}`}
                    className="btn btn-primary mr-2"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Producto;
