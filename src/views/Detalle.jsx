import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ContextCarro, useContext } from '../contexts/ContextCarro';

var pizza_detalle = [];
var pizza_ubi = [];
var pizza_img = [];
var pizza_descripcion = [];
var pizza_ingredientes = [];
var pizza_precio = [];
var pizza_nombre = [];
var pizza_id = [];
var carrito = [];
var sumandoPrecios = [];
var totalisimo = [];


const Detalle = () => {

    const { state } = useContext(ContextCarro);
    const  total  = useContext(ContextCarro);
    const { id } = useParams();
    const { addToCart } = useContext(ContextCarro);

    const [pizzaDetalle, setPizzaDetalle] = useState('');

    const [ carritoSeleccion, setCarritoSeleccion] = useState('');


    useEffect(() => {
        getDetallePizza();
    }, []);

    const getDetallePizza = () => {

        setPizzaDetalle(state.data);
        pizza_detalle = state.data;

        const buscador = (f) => f.id === id;
        pizza_ubi = pizza_detalle.findIndex(buscador);

        pizza_img = pizza_detalle[pizza_ubi].img;
        pizza_descripcion = pizza_detalle[pizza_ubi].desc;
        pizza_ingredientes = pizza_detalle[pizza_ubi].ingredients;
        pizza_precio = pizza_detalle[pizza_ubi].price;
        pizza_nombre = pizza_detalle[pizza_ubi].name;
        pizza_id = id;
    };

    const agregarAlCarrito = (id, precio) => {

        carrito=state.cart;
        carrito.push(id);
        totalisimo = total.total.total;
        sumandoPrecios.push(precio);

        setCarritoSeleccion(state.cart);
        setCarritoSeleccion(...[id]);
        addToCart(carrito, sumandoPrecios);
    };

    return(
        <div className="mt-5 container">
            {
                (!id) ?
                    <p>No hay valor</p> :

                    <div className="card mb-3 fondo_carta">
                    <div className="row g-0 offset-md-3">
                        <div className="col-md-4">
                            <img src={pizza_img} className="img-fluid mt-4" alt="..." style={{ height: "300px"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{pizza_nombre}</h3>
                                <hr />
                                <p>{pizza_descripcion}</p>
                                <p>Ingredientes: </p>
                                    <p>🍕 {pizza_ingredientes[0]}</p>
                                    <p>🍕 {pizza_ingredientes[1]}</p>
                                    <p>🍕 {pizza_ingredientes[2]}</p>
                                    <p>🍕 {pizza_ingredientes[3]}</p>
                                    <p>Precio: ${pizza_precio}</p>
                                    <button type="button" className="btn btn-danger" onClick={() => {agregarAlCarrito(pizza_id, pizza_precio)}}>Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Detalle;