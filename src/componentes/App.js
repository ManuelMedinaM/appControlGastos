import React,{Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import{validarPresupuesto} from '../helper'
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

  state ={
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto();

    
  
  }
//metodo inicial que inciializa valores
  obtenerPresupuesto = () =>{
    let presupuesto = prompt('Cual es el presupuesto');
    let resultado = validarPresupuesto(presupuesto);
      if(resultado){

       this.setState({
         presupuesto: presupuesto,
         restante: presupuesto
         })

      }else{
          //si no es valido le mandamos otra vez
          this.obtenerPresupuesto();

        }
}

//metodo que agrega el los gastos
  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {... this.state.gastos};
    //agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;

    //restar el presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);

    //ponerlo en state
    this.setState({
      gastos : gastos
    })
  }

//metodo que resta el gasto
  //Restar del presupuesto cuando se cree un nuevo gasto
  restarPresupuesto = cantidad =>{
    //leer el gasto
    let restar = Number(cantidad);

    //tomar una copia del state actual
    let restante = this.state.restante;

    //lo restamos

    restante -= restar;

    //agregamos el nuevo state
    this.setState({
      restante
   } )

  }



  render() {
    return (
    <div className= "app container">
      <Header
        titulo='Gasto Semanal'
      
      />
      <div className="contenido-principal">
        <div className ="row">
          <div className = "one-half column">
            <Formulario
              agregarGasto ={this.agregarGasto}
            
            
            />
          </div>
          <div className = "one-half column">
            <Listado
              gastos= {this.state.gastos}
            />
            <ControlPresupuesto
              presupuesto = {this.state.presupuesto}
              restante = {this.state.restante}
            />
          </div>
        </div>
      </div>



    </div>
    );
  }
}

export default App;
