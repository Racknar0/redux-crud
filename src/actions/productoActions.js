import clienteAxios from '../config/axios';
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types';

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            // insertar en la api
            await clienteAxios.post('/productos', producto);

            // Si todo sale bien actualizar error
            dispatch(agregarProductoExito(producto));
        } catch (error) {
            console.log(error);
            //Si hay un error cambiar el state
            dispatch(agregarProductoError(true));
        }
    };
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true,
});

//Si el producto se guarda en la BD
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
});

// Si hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,
});
