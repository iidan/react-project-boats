import axios from "axios";
import React, {Component, useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Select from "react-select";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";

const Boats = (props) => {

    const max = 6;
    const min = 0;
    const [boat, boats] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
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

    const getPages = (value = 1, sort = 'id') => {
        let number = getCurrentPage(pageCount + value);
        setPageCount(number);
        axios.get("http://localhost:9090/loadBoats", {
            params: {
                page: number,
                size: 1,
                sort: sort
            }
        })
            .then(res => {
                boats(res.data);
            });
    }

    const next = () => {
        getPages(1);
    };

    const previous = () => {
        getPages(-1);
    };

    const sortBy = (sort) => {
        debugger
        getPages(pageCount, sort);
    };

    const [type, setType]: any = useState('');

    return (
        <div>
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
            <div style={{marginBottom: '10px', padding: '5px'}}>
                <Form.Group controlId="formBasicSelect">
                    <Form.Label>Select sort by</Form.Label>
                    <Form.Control
                        as="select"
                        value={type}
                        onChange={e => {
                            sortBy(e.target.value);
                            setType(e.target.value);
                        }}
                    >
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

                <Button onClick={() => next()}>Next</Button>
                <Button onClick={() => previous()}>Previous</Button>
            </div>
        </div>

    )
};

export default Boats;