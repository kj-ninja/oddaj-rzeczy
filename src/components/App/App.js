import React from 'react';
import '../../scss/main.scss';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home";


function App() {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;
