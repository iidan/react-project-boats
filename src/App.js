import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/tableStyle.css'
import NewCard from "./Js/NewBoat";
import mainBoatImage from "./Files/bg.jpg";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BoatsContainer from "./Js/BoatsContainer";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="head-text">
                    <div className="head-image">
                        <img src={mainBoatImage} className="imageBgBox"/>
                    </div>
                    <Switch>
                        <Route path="/" exact component={BoatsContainer}/>
                        <Route path="/new" component={NewCard}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
