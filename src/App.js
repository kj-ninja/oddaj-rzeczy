import React from 'react';
import './scss/main.scss';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

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
