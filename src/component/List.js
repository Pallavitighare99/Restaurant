import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData(){
        fetch('http://localhost:3000/restaurent').then((resp) => {
            resp.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id) {
        fetch('http://localhost:3000/restaurent/' + id, {
            method: "DELETE",
            // headers: {
            //     'content-Type': 'application/json'
            // },
            // body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurent has been deleted")
                this.getData()
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
                                                <td><Link to={"/update/" + item.id} ><FontAwesomeIcon icon={faEdit} /></Link>&nbsp;&nbsp;
                                                    <span onClick={() => this.delete(item.id)} ><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
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