import React from 'react';
import Header from './header'

// import BinsList from './bins/bins_list';
import seleccionRol from './seleccionRol';


//{ <seleccionRol/>   }
//props.children tiene a seleccionRol
//export default(props) =>{
export default(props) =>{

		return (

		<div>
		    <Header/>
            {props.children}
            

            
            
		</div>

		);

}