import React, {Component, useState} from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, Collapse, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Modal from "react-bootstrap/Modal";

class ReportModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reportDate: new Date(),
            visible: true,
            report: "",
            employeeId: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    onFormSubmit(e) {
        this.state.employeeId = document.getElementById("userId").value;
        const reportDto = this.state;

        axios.post('http://localhost:9789/create-new-report', reportDto)
            .then(function (response) {
                //handle success
                console.log(response);
                window.location = '/';
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    render() {
        return (
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                {...this.props}
                show={this.props.show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Report
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.onFormSubmit}>
                        <label>set new report : </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="report"
                                  onChange={this.handleChange}></textarea>
                        <input type="text" value={this.props.employeeinfo.id} hidden={true} className="form-control"
                               id="userId"/>

                        <Modal.Footer>
                            <Button onClick={this.props.onHide} variant="secondary">Close</Button>
                            <Button type="submit" className="btn btn-success">Create</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ReportModal;