import React, { Component } from 'react';
import { Form, Container, Card, Button } from 'react-bootstrap';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            retype: "",
            firstnameError: "",
            lastnameError: "",
            emailError: "",
            passwordError: "",
            retypeError: ""
        }
    }
    valid() {
        if ((!this.state.firstname.includes(" ")) && (!this.state.lastname.includes(" ")) &&
            (!this.state.email.includes("@")) && this.state.password.length < 8 && (!this.state.retype.includes(" "))) {
            this.setState({
                firstnameError: "*Firstname required", lastnameError: "*Lastname required",
                emailError: "*Email required", passwordError: "*Password is less than 8", retypeError: "*Password required"
            })
        }
        else if (!this.state.firstname.includes(" ")) {
            this.setState({ firstnameError: "*Firstname required" })
        }
        else if (!this.state.lastname.includes(" ")) {
            this.setState({ lastnameError: "*Lastname required" })
        }
        else if (!this.state.email.includes("@")) {
            this.setState({ emailError: "*Email required" })
        }
        else if (this.state.password.length < 8) {
            this.setState({ passwordError: "*Password is less than 8" })
        }
        else if (!this.state.retype.includes(" ")) {
            this.setState({ retypeError: "*Password required" })
        }

        else {
            return true;
        }
    }
    submit() {
        this.setState({ firstnameError: "", lastnameError: "", emailError: "", passwordError: "", retypeError: "" })

        if (this.valid()) {
            alert("form is submitted")
        }
    }

    render() {
        return (
            <div>
                <Container className='main'>
                    <Card className='card'>
                        <Card.Body className='body'>
                            <Card.Title>Registration Form</Card.Title><br />
                            <Card.Text>
                                <Form.Control type='text' name='firstname' placeholder='Firstname'
                                    onChange={(e) => { this.setState({ firstname: e.target.value }) }} />
                                <p>{this.state.firstnameError}</p>
                                <Form.Control type='text' name='lastname' placeholder='Lastname'
                                    onChange={(e) => { this.setState({ lastname: e.target.value }) }} />
                                <p>{this.state.lastnameError}</p>
                                <Form.Control type='text' name='email' placeholder='Email'
                                    onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                <p>{this.state.emailError}</p>
                                <Form.Control type='password' name='password' placeholder='Password'
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                <p>{this.state.passwordError}</p>
                                <Form.Control type='password' name='retype' placeholder='Re-type Password'
                                    onChange={(e) => { this.setState({ retype: e.target.value }) }} />
                                <p>{this.state.retypeError}</p>
                                <Button onClick={() => this.submit()}>Submit</Button>
                            </Card.Text>
                            <lable>Already a member</lable>&nbsp;
                            <Card.Link href="/">Login Here</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }


}