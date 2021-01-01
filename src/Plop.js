import React, {Component} from 'react';
import axios from "axios";
import fifa from "./files/fifa21X.png";
import ps4Icon from "./files/ps4-icon.png";
import {Collapse} from 'react-collapse';
import gameCss from './gameCss.css';
import * as Icon from 'react-bootstrap-icons';

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
            <div className=" child">
                {this.state.cards.map((card) => (
                    <div className="row">
                        <div className="card cardSize" id="accordion">
                            <div className="card-img">
                                <img src={fifa} className="center2 pedlTop5"/>
                            </div>

                            <div className="pedlTop4">
                                <span className="gold">{card.price}</span>
                                <img src={ps4Icon} className="iconImgPos"/>
                            </div>

                            <div className="card-content">
                                <p style={{padding: '3px;'}}>{card.shortMessage}</p>
                            </div>

                            <div>
                                <button
                                    className="btn btn-primary btn-circle cardButtonSize"
                                    onClick={() => this.setState({ open: !this.state.open})}>
                                    <Icon.ChevronDown />
                                </button>
                            </div>

                            <Collapse isOpened={this.state.open}>
                                <p style={{padding: '25px;', borderTop: '1px solid silver'}}>
                                    <img src={ps4Icon} style={{padding: '5px;', width: '60px'}}/>
                                    {card.fullMessage}
                                </p>
                            </Collapse>
                        </div>
                    </div>
                    )
                )}
            </div>
        );
    }
}
export default Plop;