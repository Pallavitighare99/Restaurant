import React, { Component } from 'react';
import { Form, Table, Container } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null
        }

    }
    search(key) {
        console.log(key);
        fetch('http://localhost:3000/restaurent?q=' + key).then((resp) => {
            resp.json().then((result) => {
                this.setState({ searchData: result })
            })
        })
    }
    delete(id) {
        fetch('http://localhost:3000/restaurent/' + id, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurent has been deleted")
                
            })

        })
    }

    render() {
        return (
            <div>
                <Container>
                <h1>Restaurent Search</h1>
                <Form.Control type="text" onChange={(e) => this.search(e.target.value)} placeholder="Search Here" />
                <div>

                    {
                        this.state.searchData ?
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
                                        this.state.searchData.map((item) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.email}</td>
                                                <td><Link to={"/update/" + item.id} ><FontAwesomeIcon icon={faEdit} /></Link>&nbsp;&nbsp;
                                                    <span onClick={() => this.delete(item.id)} ><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                                            </tr>)
                                    }
                                </tbody>
                            </Table>
                            </div>
                : ""
                    }


            </div >
            </Container>
            </div >
        );
    }
}

export default Search;