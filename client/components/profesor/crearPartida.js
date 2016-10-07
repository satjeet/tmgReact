import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';


import { Partidas } from '../../../imports/collections/partidas';

class crearPartida extends Component{
/*
	onBindClick(event){

		event.preventDefault();
		Meteor.call('bins.insert',(error,binId)=>{
			browserHistory.push(`/bins/${binId}`);
		});

	}
*/
	
	onCrearPartidaClick(event){
		event.preventDefault();

	        const nombrePartida=this.refs.nPartidacrear.value;
	       // Meteor.call('partidas.crearPartida',nombrePartida);
	       Meteor.call('partidas.crearPartida',nombrePartida,(error,partidaId)=>{
			browserHistory.push("/profesor/waitingGrupos/"+`${partidaId}`);
			});
	}
//<a href="#" onClick={this.onBindClick.bind(this)}>Create Bin</a>

	render(){

		return(

			<div className="row">
				<div className="col-md-4"> </div>
				<div className="col-md-4">

					<div className="jumbotron jumbotron-fluid">
						  <div className="container">
						    <h1 className="display-3">Crear Partida</h1>


							     <div className="input-group">
			                        <input ref="nPartidacrear" className="form-control" placeholder='Ingrese el nombre de su partida'/>
			                        <div className="input-group-btn">
			                            <button
			                                onClick={this.onCrearPartidaClick.bind(this)}
			                                className="btn btn-default">
			                                Crear Partida
			                            </button>
			                        </div>
			                    </div>


						  </div>
					</div>
				</div>
			 	<div className="col-md-4"> </div>
			</div>

			 

		);


	}
}


//exportar componente
export default crearPartida;