import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';


import { Partidas } from '../../../imports/collections/partidas';

import waitingGrupos from './waitingGrupos';


class plantillaProfesor extends Component{

	onComenzarPartidaClick(event){
		event.preventDefault();
		browserHistory.push(`/profesor/`);
	}

	

	render(){


		return (

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

					<div className="row">
						<div className="center">
							<button type="button" onClick={this.onComenzarPartidaClick.bind(this)} className="btn btn-primary btn-lg btn-block">Comenzar Partida</button>
						</div>

					</div>


				</div>
			 	<div className="col-md-3">

			 	</div>
			</div>


			
		);


	}
}


//exportar componente
export default plantillaProfesor;
