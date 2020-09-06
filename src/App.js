import React, { Component } from 'react'
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi()
    })
  }

  consultarApi = async () => {
    const url = `https://pixabay.com/api/?key=17061214-8d0c15053e7709b2466d2d52a&q=${this.state.termino}&per_page=39&page=${this.state.pagina}`
    const datos = await fetch(url)
    const respuesta = await datos.json(url)
    //console.log(respuesta.hits)
    return this.setState({ imagenes: respuesta.hits })
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina
    if(pagina === 1) return null
    pagina--
    this.setState({
      pagina
    }, () => {
      this.consultarApi()
      this.scrool()
    })
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina
    pagina++
    this.setState({
      pagina
    }, () => {
      this.consultarApi()
      this.scrool()
    })
  }

  scrool = () => {
    const elemento = document.querySelector('.jumbotron')
    elemento.scrollIntoView('smooth', 'start')
  }

  render(){
    return (
      <div className='container'>
        <div className='jumbotron'>
          <p className='lead text-center'>Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda}/>
        </div>
        <div>
          <Resultado 
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    )
  }
}

export default App;

//app en classname
