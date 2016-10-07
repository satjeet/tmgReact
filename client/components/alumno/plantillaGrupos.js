import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';


import { Partidas } from '../../../imports/collections/partidas';

import crearGrupo from './crearGrupo';


class plantillaGrupos extends Component{

	render(){
		return(

			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-8">

					<div className="row">
						<div className="jumbotron jumbotron-fluid">
							  <div className="container">
							    {this.props.children}



							  </div>

							 

						</div>
					</div>

					


				</div>
			 	<div className="col-md-3">

			 	Lista de componentes

			 	</div>
			</div>

		);


	}
}


//exportar componente
export default plantillaGrupos;
