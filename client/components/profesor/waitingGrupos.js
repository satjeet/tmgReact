import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';


import { Partidas } from '../../../imports/collections/partidas';

class waitingGrupos extends Component{


	render(){

		return(

			<div >
			    <h1 className="display-3">Esperando estudiantes</h1>

			</div>

			 

		);


	}
}


//exportar componente
export default waitingGrupos;