import axios from "axios";
import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Boats = (props) => {

    const [boat, boats] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [type, setType]: any = useState('model.year');
    const [pageSizeInit, pageSizeInitSet] = useState([1, 3, 5]);
    const [sortByInit] = useState({
        id: 'id',
        name: 'name',
        shipyardName: 'shipyard.name',
        country: 'shipyard.country',
        model: 'model.model',
        year: 'model.year',
        size: 'size',
        type: 'type'
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
        axios.get("http://localhost:9090/loadBoats", {
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
                boats(res.data.taxReportList);
            });
    }

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
                            <Form.Label>Select sort by</Form.Label>
                            <Form.Control
                                as="select"
                                value={type}
                                onChange={e => {
                                    sortBy(e.target.value);
                                }}>
                                {Object.keys(sortByInit).map(key => (
                                    (<option value={sortByInit[key]}>{key}</option>)
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </li>
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
                                    return (<option value={page}>{page}</option>)
                                })}
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