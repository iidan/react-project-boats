import axios from "axios";
import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EmployeeDetailsWindow from "./EmployeeDetailsWindow";

const Employees = (props) => {

    const [employee, employeeList] = useState([]);
    const [manager, setManager] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [type, setType]: any = useState('position');
    const [pageSizeInit, pageSizeInitSet] = useState([1, 3, 5]);
    const [sortByInit] = useState({
        firstName: 'firstName',
        lastName: 'lastName',
        position: 'position'
    });

    useEffect(async () => {
        getPages(pageCount, type, pageSize);
    }, []);

    const isMinPage = (value) => {
        return value < min;
    };

    const isMaxPage = (value) => {
        return value > max;
    };

    const getCurrentPage = (value) => {
        let number = value;
        if (isMinPage(number)) {
            number = min;
        }
        if (isMaxPage(number)) {
            number = max;
        }
        return number
    }

    const getPages = (value, sort, size) => {
        let number = getCurrentPage(pageCount + value);
        setPageCount(number);
        axios.get("http://localhost:9789/Employees", {
            headers: {
                "Accept": "application/json",
            },
            params: {
                page: number,
                size: size,
                sort: sort
            }
        })
            .then(res => {
                setMax(res.data.pageSize - 1);
                employeeList(res.data.employees);
            });
    };

    const getManager = (employeeId) => {
        axios.get("http://localhost:9789/get-my-direct-manager", {
            headers: {
                "Accept": "application/json",
            },
            params: {
                myEmployeeId: employeeId
            }
        })
            .then(res => {
                setManager(res.data);
            });
    };

    const next = () => {
        getPages(1, type, pageSize);
    };

    const previous = () => {
        getPages(-1, type, pageSize);
    };

    const sortBy = (sort) => {
        setType(sort);
        getPages(pageCount, sort, pageSize);
    };

    const setNewPageSize = (size) => {
        setPageSize(size);
        getPages(pageCount, type, size);
    };

    const [show, setShow] = useState(false);
    const handleShow = (employee) => {
        setShow(true);
        setEmployeeInfo(employee);
        getManager(employee.id);
    };

    const handleClose = () => {
        setShow(false);
    };
    const [employeeInfo, setEmployeeInfo] = useState("");

    return (
        <div className="center">
            <h2>Employee List</h2>
            <table>
                <tbody>
                {employee.map((employee, index) => {
                    return (
                        <tr key={index} id={index} className="col-sm">
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.position}</td>
                            <td className="tdViewButton"><Button className="buttonView"
                                                                 onClick={() => handleShow(employee)}> View </Button>
                            </td>
                        </tr>)
                })}
                </tbody>
            </table>
            <div className="row">
                <div className="col">
                    <ul className="nav nav-pills pad5">
                        <li className="nav-item">
                            <Form.Group controlId="formBasicSelect2">
                                <Form.Label>page size</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={pageSize}
                                    onChange={e => {
                                        setNewPageSize(e.target.value);
                                    }}>
                                    {pageSizeInit.map((page, index) => {
                                        return (<option key={index} value={page}>{page}</option>)
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </li>
                    </ul>
                </div>
                <div className="row pagingButtons">
                    <div className="col-md-6 form-group">
                        <Button className="" onClick={() => previous()}>Previous</Button>
                    </div>
                    <div className="col-md-6 form-group">
                        <Button className="" onClick={() => next()}>Next</Button>
                    </div>
                </div>
            </div>

            <EmployeeDetailsWindow
                show={show}
                onHide={() => handleClose(false)}
                employeeinfo={employeeInfo}
                employeelist={employee}
                mangerlist={manager}
            />
        </div>
    )
};

export default Employees;