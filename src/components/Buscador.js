import React, { Component } from 'react'

class Buscador extends Component {

    busquedaRef = React.createRef()

    obtenerDatos = (e) => {
        e.preventDefault()
        const termino = this.busquedaRef.current.value 
        this.props.datosBusqueda(termino)
        
        document.getElementById('form').reset()
    }

    render(){
        return(
            <form id='form' onSubmit={this.obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input className='form-control' placeholder='Busca tu imagen. Por ejemplo: naturaleza'
                        ref={this.busquedaRef}/>
                    </div>
                    <div className='form-group col-md-4'>
                        <input className='btn btn-primary btn-block'
                        type='submit'
                        value='Buscar imagen'/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Buscador