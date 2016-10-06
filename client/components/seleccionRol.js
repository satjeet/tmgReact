import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class seleccionRol extends Component{
/*
	onBindClick(event){

		event.preventDefault();
		Meteor.call('bins.insert',(error,binId)=>{
			browserHistory.push(`/bins/${binId}`);
		});

	}
*/
//<a href="#" onClick={this.onBindClick.bind(this)}>Create Bin</a>

	render(){

		return(

			<div className="row">
				<div className="col-md-4"> </div>
				<div className="col-md-4">

					<div className="jumbotron jumbotron-fluid">
						  <div className="container">
						    <h1 className="display-3">Escoje tu Rol</h1>
						    <button type="button" className="btn btn-primary btn-lg btn-block">Profesor</button>
						    <button type="button" className="btn btn-primary btn-lg btn-block">Alumnos</button>


						  </div>
					</div>
				</div>
			 	<div className="col-md-4"> </div>
			</div>


			 

		);


	}
}


//exportar componente
export default seleccionRol;