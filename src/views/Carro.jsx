import { ContextCarro, useContext } from '../contexts/ContextCarro';

var pizza_detalle = [];
var id = [];
var pizzaIndex = '';
var totalTotalTotal = [];
var dataData = [];
var nuevosPrecios = [];
var probandoSuma = 0;

const Carro = () => {
    
    const { state } = useContext(ContextCarro);
    const  total  = useContext(ContextCarro);
    //const  arreglos  = useContext(ContextCarro);

    nuevosPrecios = [];
    probandoSuma = 0;

    pizza_detalle = state.data;


    dataData = state.data;


      const buscador2 = (id) => {
        var pizzaIndex2 = [];
        
        pizzaIndex2.push(pizza_detalle.findIndex((f) => f.id === id));
        pizzaIndex = [...pizzaIndex2];

        return(pizzaIndex);
      };



    const pizza_revision = state.cart;
    const pizza_revision2 = pizza_revision.map((i) => 
        buscador2(i)
    );


    //esta suma del total se hace en otro lugar, no se utiliza por el momento
    totalTotalTotal = total.total;
    //<h3 className="card-title">${totalTotalTotal.total}</h3>


    const probando = (precio) => {
        nuevosPrecios.push(precio);
        probandoSuma = probandoSuma + precio;
      };



    return(

        <div className="mt-5 container">
            <h1>Detalles del pedido:</h1>
            {
                (!id) ?
                    <p>Carro Vacio</p> :

                    <div className="card mb-3 fondo_carta">
                    {

                        state.cart.map((item, index) => (
                       
                            <div key={index} className="card  fondo_carta">
                            <div className="row g-0 offset-md-3">
                                <div className="col-md-4">
                                    <img src={state.data[pizza_revision2[index]].img} className="img-fluid rounded-start" alt="..." style={{ height: "150px"}} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">

                                        <h3 className="card-title">{ state.data[pizza_revision2[index]].name}</h3>
                                        <h4 className="card-title">${state.data[pizza_revision2[index]].price}</h4>
                                        {
                                            probando(state.data[pizza_revision2[index]].price)
                                        }

                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            }
                <h2 className="card text-end pe-5">Total ${probandoSuma}</h2>
                <button type="button" className="btn btn-success btn-lg">Ir a Pagar</button>
        </div>
    );
};

export default Carro;