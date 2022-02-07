import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            rating: null,
            email: null
        }
    }
    create() {
        fetch('http://localhost:3000/restaurent', {
            method: "Post",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurent has been added")
            })

        })
    }
    render() {
        return (
            <div>
                <h1>Restaurent Create</h1>
                <div>
                    <input onChange={(e) => { this.setState({ name: e.target.value }) }}
                        placeholder="Restaurant Name" /><br /><br />
                    <input onChange={(e) => { this.setState({ address: e.target.value }) }}
                        placeholder="Restaurant Address" /><br /><br />
                    <input onChange={(e) => { this.setState({ rating: e.target.value }) }}
                        placeholder="Restaurant Rating" /><br /><br />
                    <input onChange={(e) => { this.setState({ email: e.target.value }) }}
                        placeholder="Restaurant Email" /><br /><br />
                    <Button onClick={() => { this.create() }}>Add Restaurant</Button>

                </div>
            </div>
        );
    }
}

export default Create;