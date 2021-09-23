import React, {Component} from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, Collapse, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class NewBoat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            year: "",
            shipyardName: "",
            shipyardCountry: "",
            model: "",
            boatSize: "",
            boatType: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.id == "name") this.setState({name: event.target.value});
        if (event.target.id == "year") this.setState({year: event.target.value});
        if (event.target.id == "shipyardName") this.setState({shipyardName: event.target.value});
        if (event.target.id == "shipyardCountry") this.setState({shipyardCountry: event.target.value});
        if (event.target.id == "model") this.setState({model: event.target.value});
        if (event.target.id == "boatSize") this.setState({boatSize: event.target.value});
        if (event.target.id == "boatType") this.setState({boatType: event.target.value});
    }

    handleSubmit() {
        const params = this.state
        axios.post("http://localhost:9090/createNewBoat", params)
            .then(res => {
                window.location = '/';
            });

    }

    render() {
        return (
            <div>
                <div className='text-on-image'>
                    <h3> New Boat </h3>
                </div>
                <div>
                    <Button href="/" type="button" id="button-on-image" className="btn btn-info">View Boats</Button>
                </div>
                <div className="containerX">
                    <form className="formContainer" onSubmit={this.handleSubmit}>
                        <p>Name</p>
                        <input className="test" id="name" type="text" value={this.state.value} size="50"
                               onChange={this.handleChange}/>

                        <p>Year</p>
                        <input id="year" type="text" value={this.state.value} size="50" onChange={this.handleChange}/>

                        <p>Shipyard Name</p>
                        <input id="shipyardName" type="text" value={this.state.value} size="70"
                               onChange={this.handleChange}/>

                        <p>Shipyard Country</p>
                        <input id="shipyardCountry" type="text" value={this.state.value} size="70"
                               onChange={this.handleChange}/>

                        <p>Model</p>
                        <input id="model" type="text" value={this.state.value} size="70" onChange={this.handleChange}/>

                        <p>Boat Size</p>
                        <input id="boatSize" type="text" value={this.state.value} size="50"
                               onChange={this.handleChange}/>

                        <p>Boat Type</p>
                        <input id="boatType" type="text" value={this.state.value} size="50"
                               onChange={this.handleChange}/><br/>

                        <div className="formButtons">
                            <Button type="submit" className="btn btn-success">Create</Button>
                            <Button id="padl5" className="btn btn-dark" href="/" type="submit">Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewBoat;