import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Btn1 from './Btn1';
import Btn2 from './Btn2';
import Btn3 from './Btn3';
import Btn4 from './Btn4';
import Btn5 from './Btn5';
import Btn6 from './Btn6';
import Btn7 from './Btn7';
import Btn8 from './Btn8';
import Btn9 from './Btn9';
import Btn10 from './Btn10';

import Pag2 from './Pag2';

class App extends Component {
  
  componentDidMount(){
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then((res) => console.log(res)
  )
  }

  render() {
    return (
      <Router>
          <div >
          
            <Btn1 className= "Bt"/>
            <Btn2 className= "Bt"/>
            <Btn3 className= "Bt"/>
            <Btn4 className= "Bt"/>
            <Btn5 className= "Bt"/>
            <Btn6 className= "Bt"/>
            <Btn7 className= "Bt"/>
            <Btn8 className= "Bt"/>
            <Btn9 className= "Bt"/>
            <Btn10 className= "Bt"/>

            



            <ul className="Pag">
            <li> Páginas: </li>
            <li> 1 </li>
            <li><Link className="Lnk" to= './Pag2'> 2 </Link></li>
            <li><Link className="Lnk" to='./Pag2'> Next </Link></li>
            </ul>

        <Route exact path= "/Pag2" component={Pag2} />
        <Route exact path= "/App" component={App} />

        </div>
      </Router>
    );
  }
}



export default App;
