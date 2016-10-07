import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route , IndexRoute, browserHistory} from 'react-router';

import App from './components/app';

import seleccionRol from './components/seleccionRol';
import plantillaProfesor from './components/profesor/plantillaProfesor';
import crearPartida from './components/profesor/crearPartida';
import waitingGrupos from './components/profesor/waitingGrupos';

import unirsePartida from './components/alumno/unirsePartida';
import plantillaGrupos from './components/alumno/plantillaGrupos';
import crearGrupo from './components/alumno/crearGrupo';





        //	<Route path="profesor/waitingGrupos/:partidaId" component={waitingGrupos} />
//

const routes=(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={seleccionRol}/>

        	<Route path="profesor" component={crearPartida}>
        	</Route>

			<Route component={plantillaProfesor}>
				<Route path="profesor/waitingGrupos/:partidaId" component={waitingGrupos} />
        	</Route>


        	<Route path="alumno" component={unirsePartida}/>

        	<Route component={plantillaGrupos}>
				<Route path="grupo/:partidaId" component={crearGrupo} />

        	</Route>

        </Route>
    </Router>
);
Meteor.startup(() => {
  // code to run on server at startup
    //            <Route path="bins/:binId" component={BinsMain}/>
    ReactDOM.render(routes, document.querySelector('.render-target'));
});



// // <IndexRoute component={BinsList}/>