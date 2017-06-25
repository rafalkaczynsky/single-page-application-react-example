import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
         Route,
         IndexRoute,
         hashHistory} from 'react-router';

import App from './App';

import {About, Home, Portfolio, Contact} from './components'
import  {WebsiteOne, WebsiteTwo, WebsiteThree, WebsiteFour} from './components/websites'

    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="portfolio" component={Portfolio}>
                    <Route path="website1" component={WebsiteOne} />
                    <Route path="website2" component={WebsiteTwo} />
                    <Route path="website3" component={WebsiteThree} />
                    <Route path="website4" component={WebsiteFour} />
                </Route>
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>,
        document.getElementById("root")
    );
  
