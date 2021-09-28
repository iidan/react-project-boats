import axios from "axios";
import React, {Component, useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Boats = (props) => {

    const [boat, boats] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [type, setType]: any = useState('');

    useEffect(async () => {
        getPages();
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

    const getPages = (value = 0, sort = 'id') => {
        let number = getCurrentPage(pageCount + value);
        setPageCount(number);
        axios.get("http://localhost:9090/loadBoats", {
            headers: {
                "Accept": "application/json",
            },
            params: {
                page: number,
                size: pageSize,
                sort: sort
            }
        })
            .then(res => {
                setMax(res.data.totalBoats);
                boats(res.data.boats);
            });
    }

    const next = () => {
        getPages(1, type);
    };

    const previous = () => {
        getPages(-1, type);
    };

    const sortBy = (sort) => {
        setType(sort);
        getPages(pageCount, sort);
    };

    return (
        <div>
            <table>
                {boat.map((boats, index) => {
                    return (
                        <tr className="col-sm">
                            <td>{boats.name}</td>
                            <td>{boats.shipyard.name}</td>
                            <td>{boats.shipyard.country}</td>
                            <td>{boats.model.model}</td>
                            <td>{boats.model.year}</td>
                            <td>{boats.size}</td>
                            <td>{boats.type}</td>
                        </tr>)
                })}
            </table>
            <div className="container-fluid row justify-content-center">
                <ul className="nav nav-pills padl5">
                    <li className="nav-item">
                        <Form.Group controlId="formBasicSelect">
                            <Form.Control
                                as="select"
                                value={type}
                                onChange={e => {
                                    sortBy(e.target.value);
                                }}>
                                <option value="id">id</option>
                                <option value="name">name</option>
                                <option value="shipyard.name">shipyardName</option>
                                <option value="shipyard.country">country</option>
                                <option value="model.model">model</option>
                                <option value="model.year">year</option>
                                <option value="size">size</option>
                                <option value="type">type</option>
                            </Form.Control>
                        </Form.Group>
                    </li>
                </ul>
            </div>
            <div className="container-fluid row justify-content-center">
                <ul className="nav nav-pills padl5">
                    <li className="nav-item">
                        <Button onClick={() => previous()}>Previous</Button></li>
                    <li className="nav-item">
                        <Button onClick={() => next()}>Next</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Boats;