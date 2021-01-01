import './App.css';
import Card from './Card';
import React from 'react';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderX from "./Header";
import Plop from './Plop';
import { Container, Row,Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        <HeaderX ></HeaderX>
        <div className="container">
            <div className="card-deck">

                <Plop></Plop>
                <Plop></Plop>
                <Plop></Plop>
                <Plop></Plop>
                <Plop></Plop>
            </div>
        </div>
        <Footer></Footer>
    </div>

  );
}

export default App;
