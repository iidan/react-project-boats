import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Boat from "./Boat";
import '../App.css';

class BoatsContainer extends Component {

    render() {
        return (
            <div>
                <div className='text-on-image'>
                    <h3> Boats </h3>
                </div>
                <div>
                    <Button href="/new" type="button" id="button-on-image" className="btn btn-success">New Boat</Button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <th className="col-sm"></th>
                        <th className="col-3 col-sm-3">Build by</th>
                        <th className="col-3 col-sm-4">Boat Model</th>
                        <th className="col-sm"></th>
                        <th className="col-sm"></th>
                    </div>
                    <div className="row">
                        <th className="col-sm">Boat Name</th>
                        <th className="col-sm">Shipyard</th>
                        <th className="col-sm">Country</th>
                        <th className="col-sm">Model</th>
                        <th className="col-sm">Year</th>
                        <th className="col-sm">Size(ft)</th>
                        <th className="col-sm">Type</th>
                    </div>
                </div>
                <div className="my-custom-scrollbar">
                    <Boat/>
                </div>
            </div>
        );
    }
}

export default BoatsContainer;