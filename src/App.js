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
import cyberPunk2077 from './files/cyberPs4.jpg';

function App() {
  return (
    <div className="App">
        <HeaderX ></HeaderX>


        <div className="video-container">
            <iframe  className="videoFrame" id="myVideo" frameborder="0" src="https://www.youtube.com/embed/UjxS9ciNlII?controls=0&autoplay=1&mute=1&showinfo=0&loop=1"
                    frameBorder="0" allowFullScreen></iframe>
            <div id="vidtop-content">
                <div className="vid-info-image">
                    <img src={cyberPunk2077} width="40%" height="60%" className="d-inline-block align-top" alt="" loading="lazy"/>

                </div>

                <div className="vid-info">
                    <h1>Cyberpunk 2077</h1>
                    <p>
                        Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt.
                        The story takes place in Night City, an open world set in the Cyberpunk universe.
                        Players assume the first-person perspective of a customisable mercenary known as V,
                        who can acquire skills in hacking and machinery with options for melee and ranged combat.
                    </p>
                            <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds">Full article</a>
                </div>
            </div>
        </div>



        <div className="container">
            <div className="row">
                <Plop></Plop>
            </div>
        </div>
        <Footer></Footer>
    </div>

  );
}

export default App;
