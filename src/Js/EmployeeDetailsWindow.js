import React, {Component, useState} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import ReportModal from "./ReportModal";
import AssignTaskModal from "./AssignTaskModal";
import axios from "axios";

class EmployeeDetailsWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showReport: false,
            showAssignTask: false,
            subordinate: [],
            employeeType: "manager",
            myEmployeeId: ''
        };
        this.handleShowReport = this.handleShowReport.bind(this);
        this.handleShowAssignTask = this.handleShowAssignTask.bind(this);
    }

    handleShowReport(val) {
        this.setState({
            showReport: val
        })
    }

    handleShowAssignTask(val, subordinate) {
        this.setState({
            subordinate: subordinate != undefined ? subordinate : '',
            showAssignTask: val
        });
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
                    {this.state.myEmployeeId = this.props.employeeinfo.id}
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
                                {this.props.mangerlist != "" &&
                                <div className="row">
                                    <div className="col"><label>Manager :</label></div>
                                    <div className="col">
                                        <label>{this.props.mangerlist.firstName} {this.props.mangerlist.lastName}</label>
                                    </div>
                                    <div className="col">
                                        <button onClick={() => this.handleShowReport(true)}
                                                className="btn btn-primary">Report
                                        </button>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                        <label>My Tasks:</label>
                        <table>
                            <thead>
                            <tr>
                                <th width="28%">task</th>
                                <th width="28%">Assign Date</th>
                                <th width="30%">Due Date</th>
                            </tr>
                            </thead>
                        </table>
                        <table/>
                        <div className="my-modal">
                            <table>
                                <tbody>
                                {this.props.employeeinfo.assignTaskList != undefined &&
                                this.props.employeeinfo.assignTaskList.map(employee => {
                                    return (
                                        <tr key={employee.id} className="col-sm">
                                            <td>{employee.task}</td>
                                            <td>{employee.assignDate}</td>
                                            <td>{employee.dueDate}</td>
                                        </tr>)
                                })}
                                </tbody>
                            </table>
                        </div>
                        <br></br>
                        {this.props.employeeinfo.position == this.state.employeeType &&
                        <div>
                            <label>My Subordinates:</label>
                            <div className="my-modal">
                                <table>
                                    <thead>
                                    <tr>
                                        <th width="25%">First Name</th>
                                        <th width="25%">Last Name</th>
                                        <th width="25%">Position</th>
                                        <th width="25%">Assign Task to</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.employeelist.map(employee => {
                                        if (employee.id > this.props.employeeinfo.id) {
                                            return (
                                                <tr key={employee.id} className="col-sm">
                                                    <td>{employee.firstName}</td>
                                                    <td>{employee.lastName}</td>
                                                    <td>{employee.position}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => this.handleShowAssignTask(true, employee)}
                                                            type="submit"
                                                            className="btn btn-primary">Assign Task
                                                        </button>
                                                    </td>
                                                </tr>)
                                        }
                                    })}
                                    </tbody>
                                </table>
                            </div>
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
                    show={this.state.showReport}
                    employeeinfo={this.props.mangerlist}
                    onHide={() => this.handleShowReport(false)}
                />

                <AssignTaskModal
                    show={this.state.showAssignTask}
                    employeeinfo={this.state.subordinate}
                    onHide={() => this.handleShowAssignTask(false)}
                />

            </div>
        );
    }
}

export default EmployeeDetailsWindow;