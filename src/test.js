import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <a className="navbar-brand" to={"/sign-in"}>positronX.io</a>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" to={"/sign-in"}>Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to={"/sign-up"}>Sign up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path="/sign-in" component={Login} />
                                <Route path="/sign-up" component={SignUp} />
                            </Switch>

                            <Route path="/" element={<App />}>
                                <Route path="/sign-in" element={<Login />} />
                                <Route path="/sign-up" element={<Signup />}>
                                </Route>
                            </Route>
                        </div>
                    </div>
                </div>
            </Routes>
        </BrowserRouter>
    );
}
export default App