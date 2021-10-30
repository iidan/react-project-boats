import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Employee from "./EmployeeList";
import '../App.css';

class EmployeesContainer extends Component {

    render() {
        return (
            <div>
                <div className='text-on-image'>
                    <h3> Work Place </h3>
                </div>
                <div className="my-custom-scrollbar">
                    <Employee/>
                </div>
            </div>
        );
    }
}

export default EmployeesContainer;