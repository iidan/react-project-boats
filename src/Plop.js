import React, {Component} from 'react';
import axios from "axios";
import fifa from "./files/fifa21X.png";
import ps4Icon from "./files/ps4-icon.png";
import {Collapse , } from 'react-collapse';
import gameCss from './gameCss.css';
import * as Icon from 'react-bootstrap-icons';
import {Accordion, Button, Card , ListGroup} from "react-bootstrap";

class Plop extends Component {

    constructor(props) {
        super(props);
        this.state= {
            cards : [],
            open: false
        };
    }

    componentDidMount(): void {
        axios.get("http://localhost:8080/Home")
            .then(response => response.data)
            .then((data) => {
               this.setState({cards : data})
            });
    }

    render(){
        return(
            <div className="col">
                <div className="card-group">
                    {this.state.cards.map((card) => (
                        <Accordion className="pedl5">
                            <div className="card cardSize" id="accordion">
                                <div className="card-img">
                                    <img src={fifa} className="center2 pedlTop5"/>
                                </div>

                                <div className="pedlTop4">
                                    <div className="cardPricePos gold">{card.price}</div>
                                    <img src={ps4Icon} className="iconImgPos"/>
                                </div>

                                <div className="card-content">
                                    <p style={{padding: '3px;'}}>{card.shortMessage}</p>
                                </div>

                                <Accordion.Toggle as={Button} eventKey="1" className="btn btn-primary btn-circle cardButtonSize">
                                    <Icon.ChevronDown />
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="1">
                                    <ListGroup>

                                        <ListGroup.Item action> No style </ListGroup.Item>
                                        <ListGroup.Item action> Primary </ListGroup.Item>
                                        <ListGroup.Item action >Secondary </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                        )
                    )}
                </div>
            </div>
        );
    }
}
export default Plop;