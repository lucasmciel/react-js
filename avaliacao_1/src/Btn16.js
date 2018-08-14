import React, { Component } from 'react';
import axios from 'axios';
import './Btn1.css';
export default class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        retorno : ' ',
      }
    }

    componentDidMount() {
        this.consultarPersonagem();
      }
    
      consultarPersonagem(){
        axios
          .get('https://rickandmortyapi.com/api/character/16')
          .then(resultado => this.setState({ retorno: resultado.data }))
          .catch(erro => console.log(erro))
      }
    
    
      render(){
        return(
          <section className= "Sect">
          
          <img className= "Img" src= "https://rickandmortyapi.com/api/character/avatar/16.jpeg" /> <br/> <br/>
            ID: {this.state.retorno.id} <br/>
            Name: {this.state.retorno.name} <br/>
            Status: {this.state.retorno.status} <br/>
            Specie: {this.state.retorno.species} <br/>
          
          </section>
        );
      }
    }