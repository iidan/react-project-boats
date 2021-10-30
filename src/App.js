import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/tableStyle.css'
import mainBoatImage from "./Files/bg.jpg";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EmployeesContainer from "./Js/EmployeesContainer";

function App() {
    return (
        <Router>
            <div className="App">
                    <div className="head-text">
                    <div className="head-image">
                        <img src={mainBoatImage} className="imageBgBox"/>
                    </div>
                    <Route path="/" exact component={EmployeesContainer}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
