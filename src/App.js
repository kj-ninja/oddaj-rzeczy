import React from 'react';
import './scss/main.scss';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound/NotFound";
import GiveAway from "./components/GiveAway/GiveAway";

function App() {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/logowanie" component={Login}/>
                    <Route path="/rejestracja" component={SignUp}/>
                    <Route path="/wylogowano" component={Logout} />
                    <Route path="/oddaj-rzeczy" component={GiveAway} />
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        </>
    );
}
export default App;
