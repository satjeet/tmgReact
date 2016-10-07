import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class unirsePartida extends Component{
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
						    <h1 className="display-3">Unirse a Partida</h1>

							    <form>
							        <input type='text' id='li-partida' placeholder='Ingrese el nombre de la partida' />
        							<button> Unirse </button>
							    </form>


						  </div>
					</div>
				</div>
			 	<div className="col-md-4"> </div>
			</div>

			 

		);


	}
}


//exportar componente
export default unirsePartida;