import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link, Route,Routes } from 'react-router-dom';

class List extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurent').then((resp) => {
            resp.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurent List</h1><br />
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr.No.</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.email}</td>
                                                <td><Link to={'/update'+item.id} >Edit</Link></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please wait....</p>
                }
            </div>
        );
    }
}

export default List;