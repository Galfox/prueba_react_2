import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextCarro } from "./contexts/ContextCarro";
import { useState } from 'react';

import Home from './views/Home';
import Detalle from "./views/Detalle";
import Carro from "./views/Carro";
import NotFound from "./views/NotFound";

import { data } from './data/pizzas';
import './App.css';
import Navbar from './components/NavBar';
import { useEffect } from "react";

var sumaTotal= '';
var arreglos_varios = [];

function App() {

  const [state, setState ] = useState ({
                                        data: data,
                                        cart: []                              
  });

  const [total, setTotal ] = useState ({
                                          total: [],
                                          arreglo_total: []
  });

  const [arreglos, setArreglos ] = useState ({
                                                arreglos: []
  });


  useEffect(() => {
    getPizza();
  }, []);

  const getPizza =  () => {
    setState(state);
    setTotal(total);
    setArreglos(arreglos);
  };


const addToCart = (carrito, precios) => {

  setState({...state, cart: carrito});

  const sumandoTodo = precios.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore,
    0);
    setTotal({...total, total: sumandoTodo});
  };


  return (
    <div className="App container">
      <ContextCarro.Provider value = {{ state: state, addToCart, total: total, arreglos: arreglos}}>
        <BrowserRouter>
          <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/pizza/:id" element={<Detalle />} />
              <Route path="/carrito" element={<Carro />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </ContextCarro.Provider>
    </div>
  );
}

export default App;
