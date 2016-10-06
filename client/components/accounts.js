import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL',
});

class AccountsUIWrapper extends Component{

	componentDidMount(){
		// es llamado cuando el componenete es llamado a la pantalla, se ejecuta solo una vez
		//render blaze form aqui, y luego mandarla al div del render()
		this.view= Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));  

	}

	componentWillUnmount(){
		//Se ejecutara cuando nuestro componente esta apunto de ser removido de la pantalla, solo Exect una vez
		// encotrar las form que creamos y destrozarlas nosotros mismo 
	} 

	render(){

		return(
			
		    	<div ref="container">
		    	</div>

		);


	}
}


//exportar componente
export default AccountsUIWrapper;