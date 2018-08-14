import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Btn11 from './Btn11';
import Btn12 from './Btn12';
import Btn13 from './Btn13';
import Btn14 from './Btn14';
import Btn15 from './Btn15';
import Btn16 from './Btn16';
import Btn17 from './Btn17';
import Btn18 from './Btn18';
import Btn19 from './Btn19';
import Btn20 from './Btn20';

import App from './App';

class Pag2 extends Component {
  
  
  render() {
    return (
      <Router>
        <div >
            <Btn11 /> <Btn12 /> <Btn13 /> <Btn14 /> <Btn15 /> <Btn16 /> <Btn17 /> <Btn18 /> <Btn19 /> <Btn20 />

          <ul className="Pag">
            <li> Páginas:</li>
            <li><Link className="Lnk" to= './App'> 1 </Link></li>
            <li> 2 </li>
        
          </ul>

        <Route exact path= "/Pag2" component={Pag2} />
        <Route exact path= "/App" component={App} />


        </div>
      </Router>
    );
  }
}



export default Pag2;