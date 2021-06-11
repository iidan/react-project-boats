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
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import './css/videoCssFile.css'
import cyberPunk2077 from './files/CyberpunkB_2077.jpg';
import horizon from './files/horizon.png';
import biomutant from './files/Biomutant.jpg';

function App() {
  return (
    <div className="App">
        <HeaderX ></HeaderX>

        <div id="demo" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cyberPunk2077} className="testImage"  alt="Los Angeles" width="1100" height="700"/>
                </div>
                <div className="carousel-item">
                    <img src={horizon} className="testImage" alt="Chicago" width="1100" height="700"/>
                </div>
                <div className="carousel-item">
                    <img src={biomutant} className="testImage" alt="New York" width="1100" height="700"/>
                </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>

        <div className="container">
            <div className="border-x">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-tabs mr-auto">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#home">Ps4</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu1">Ps5</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu1">Xbox</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu2">PC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu2">Android</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#menu2">IOS</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0 dsds" type="submit">Search</button>
                            <button type="button" className="btn btn-primary btn-lg raised">Search</button>


                        </form>
                    </div>
                </nav>
            <div className="row">

                <Plop></Plop>

            </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

  );
}

export default App;
