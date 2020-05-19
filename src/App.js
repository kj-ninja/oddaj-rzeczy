import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound/NotFound";
import GiveAway from "./components/GiveAway/GiveAway";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <>
            <HashRouter>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/logowanie" render={(props)=><Login {...props}/>}/>
                        <Route path="/rejestracja" render={(props)=><SignUp {...props}/>}/>
                        <Route path="/wylogowano" component={Logout} />
                        <Route path="/oddaj-rzeczy" component={GiveAway} />
                        <Route component={NotFound}/>
                    </Switch>
                </ScrollToTop>
            </HashRouter>
        </>
    );
}
export default App;
