import React, {Component, useState} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AssignTaskModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dueDate: new Date(),
            assignDate: new Date(),
            employeeId: "",
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.taskChange = this.taskChange.bind(this);
    }

    taskChange(event) {
        this.setState({task: event.target.value});
    }

    handleChange(event) {
        this.setState({dueDate: event});
    }

    onFormSubmit(e) {
        this.state.employeeId = document.getElementById("userId").value;
        const assignTaskDto = this.state;
        axios.post("http://localhost:9789/create-new-assign-task", assignTaskDto)
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
                id="AssignModal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                {...this.props}
                show={this.props.show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Assign Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.onFormSubmit}>
                        <label>Task : </label>
                        <input type="text" className="form-control" id="task" onChange={this.taskChange}/>
                        <input type="text" value={this.props.employeeinfo.id} hidden={true} className="form-control"
                               id="userId"/>
                        <label htmlFor="usr">Due Date :</label>

                        <div className="form-group">
                            <DatePicker
                                selected={this.state.dueDate}
                                onChange={this.handleChange}
                                name="dueDate"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
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

export default AssignTaskModal;