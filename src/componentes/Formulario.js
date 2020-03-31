import React,{Component} from 'react';
import PropTypes from "prop-types";

class Formulario extends Component {
    //ref para el formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e)=>{
        //prevenir el default
        e.preventDefault();
        //crear el objeto con los datos
        const gasto = {
            nombreGasto : this.nombreGastoRef.current.value,
            cantidadGasto : this.cantidadGastoRef.current.value

        }
        console.log(gasto);
        //agregarlo y enviarlo por props
        this.props.agregarGasto(gasto);
        //resetear el formulario
        e.currentTarget.reset();
    }


    render() {
        return (
            <form onSubmit={this.crearGasto}>
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte" />
            </div>
        
            <div className="campo">
                <label>Cantidad</label>
                <input ref={this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. 300" />
            </div>
        
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
        </form>
        );
    }
}

Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Formulario;