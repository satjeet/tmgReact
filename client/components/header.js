import React, {Component} from 'react';
//import {Link, browserHistory} from 'react-router';

import Accounts from './accounts';


class Header extends Component{
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

			  <nav className="navbar navbar-default">
			    <div className="container-fluid">
			      <a className="navbar-brand" href="/">Brand Management</a>

			      <div className="collapse navbar-collapse" >
				      <ul className="nav navbar-nav">
						   <li>
				          		<a href="/partidas"><span className="" aria-hidden="true">Crear/Unirse Partida</span></a>
				     		</li>
				  
				       
				     			          
				      </ul>
				      
				      <ul className="nav navbar-nav navbar-right" >  
				      	<li>
				      		<Accounts /> 
				      	</li>
				      </ul>

			       </div>
			    
			    
			    </div>
			  </nav>


		);


	}
}


//exportar componente
export default Header;