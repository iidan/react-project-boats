import React, {Component, useState} from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, Collapse, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import ReportModal from "./ReportModal";
import AssignTaskModal from "./AssignTaskModal";
import DatePicker from "react-datepicker";

class EmployeeDetailsWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show2: false,
            show3: false,
            assigntasklist: [],
            oneTime: true
        };

        this.handleShow2 = this.handleShow2.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleShow4 = this.handleShow4.bind(this);

    }

    handleShow2() {
        this.setState({
            show2: true
        })
    }

    handleShow3() {
        this.setState({
            show3: true
        })
    }

    handleShow4(value) {
        if (value != undefined && this.props.oneTime) {
            this.setState({
                assigntasklist: value,
                oneTime: false
            });
        }
    }

    render() {
        return (
            <div>
                <Modal
                    size="lg"
                    id="mainModal"
                    {...this.props}
                    onHide={this.props.onHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="main-modal">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <img className="img-fluid" width="180" height="220"/>
                            </div>
                            <div className="form-group col-md-8">
                                <div className="row">
                                    <div className="col"><label>Name :</label></div>
                                    <div className="col"><label>{this.props.employeeinfo.firstName}</label></div>
                                    <div className="col"></div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col"><label>Position :</label></div>
                                    <div className="col"><label>{this.props.employeeinfo.lastName}</label></div>
                                    <div className="col"></div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col"><label>Manager :</label></div>
                                    <div className="col"><label>David</label></div>
                                    <div className="col">
                                        <button onClick={this.handleShow2}
                                                className="btn btn-primary">Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label>My Tasks:</label>
                        <div className="my-modal">
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">task</th>
                                    <th scope="col">Assign Date</th>
                                    <th scope="col">Due Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.assigntasklist != undefined &&
                                this.props.assigntasklist.map(employee => {
                                    return (
                                        <tr className="col-sm">
                                            <td>{employee.task}</td>
                                            <td>{employee.assignDate}</td>
                                            <td>{employee.dueDate}</td>
                                        </tr>)
                                })
                                }
                                </tbody>
                            </table>
                        </div>
                        <label>My Subordinates:</label>
                        <ul className="my-modal border">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col"><label>David</label></div>
                                    <div className="col"><label>Moshe</label></div>
                                    <div className="col"><label>Manager</label></div>
                                    <div className="col">
                                        <button onClick={this.handleShow3} type="submit"
                                                className="btn btn-primary">Assign
                                            Task
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        {this.props.employeeinfo.position == "manager" &&
                        <div>
                            <label>My List Reports:</label>
                            <ul className="my-modal border">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-2"><label>David</label></div>
                                        <div className="col-sm-2"><label>Moshe</label></div>
                                        <div className="col-sm-4"><label>12 /12/2021</label></div>
                                        <div className="col-sm-4"><label>Manager hello to you</label></div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <ReportModal
                    show={this.state.show2}
                    employeeinfo={this.props.employeeinfo}
                />
                <AssignTaskModal
                    show={this.state.show3}
                    employeeinfo={this.props.employeeinfo}
                />

            </div>
        );
    }
}

export default EmployeeDetailsWindow;