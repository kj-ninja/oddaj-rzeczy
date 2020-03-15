import React from 'react';
import './scss/main.scss';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/logowanie" component={LogIn}/>
                    <Route path="/rejestracja" component={SignUp}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;
