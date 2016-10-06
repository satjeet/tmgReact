import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route , IndexRoute, browserHistory} from 'react-router';

import App from './components/app';

import seleccionRol from './components/seleccionRol';



const routes=(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={seleccionRol}/>

        </Route>
    </Router>
);
Meteor.startup(() => {
  // code to run on server at startup
    //            <Route path="bins/:binId" component={BinsMain}/>
    ReactDOM.render(routes, document.querySelector('.render-target'));
});



// // <IndexRoute component={BinsList}/>