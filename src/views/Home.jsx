import { ContextCarro, useContext } from '../contexts/ContextCarro';
import './Home.css';

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

var pizzas =[];
var carrito = [];
var sumandoPrecios = [];


const Home = () => {

    const { state } = useContext(ContextCarro);
    const total  = useContext(ContextCarro);
    const { addToCart } = useContext(ContextCarro);


    const [ pizzaSeleccionada, setPizzaSeleccionada] = useState('');
    const [ carritoSeleccion, setCarritoSeleccion] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        getPizza();
    }, []);

    const getPizza = () => {
        setPizzaSeleccionada(state.data);
        pizzas = state.data;
    };

    const irAPizza = (id) => {
        setPizzaSeleccionada(id);
        navigate(`/pizza/${id}`);
    };
    //<button type="button" className="btn btn-primary" onClick={() => {setPizzaSeleccionada(item.id)}}>Ver mas</button>


    const agregarAlCarrito = (id, precio) => {

        carrito=state.cart;
        carrito.push(id);
        sumandoPrecios.push(precio);

        setCarritoSeleccion(state.cart);
        setCarritoSeleccion(...[id]);

        addToCart(carrito, sumandoPrecios);
    };



    return(
        <div>
            <div style={{
                backgroundImage: `url("https://www.redbakery.cl/img/myt/640.jpg")`,
                height:'300px'
            }}>
                <div className='text-light text-center'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Pizzeria Mamma Mia!</h1>
                    <h3>Tenemos las mejores pizzas que podras encontrar!</h3>
                    <hr />
                </div>
            </div>


            <div className="galeria grid-columns-5 p-3">
                {
                    pizzas.map((item, index) => (
                        <div key={index} className="col mb-3">
                            <div className="card" style={{ height: "600px" }}>
                                <img src={item.img} alt="" style={{ height: "200px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <hr />
                                    <p>Ingredientes: </p>
                                    <p>🍕 {item.ingredients[0]}</p>
                                    <p>🍕 {item.ingredients[1]}</p>
                                    <p>🍕 {item.ingredients[2]}</p>
                                    <p>🍕 {item.ingredients[3]}</p>
                                    <hr />
                                    <p>$ {item.price}</p>
                                    <button type="button" className="btn btn-primary" onClick={() => {irAPizza(item.id)}}>Ver mas</button>
                                    <button type="button" className="btn btn-danger mx-3" onClick={() => {agregarAlCarrito(item.id, item.price)}}>Añadir</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;