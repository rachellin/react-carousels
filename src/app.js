import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import { VerticalCarousel } from './components/vertical-carousel/carousel';
import { HorizontalCarousel } from './components/horizontal-carousel/carousel';

function App () {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={VerticalCarousel}/>
                    <Route path="/h" exact component={HorizontalCarousel}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;

