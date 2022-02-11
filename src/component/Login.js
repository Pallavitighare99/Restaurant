import React, { Component } from 'react';
import { Form, Container, Card, Button } from 'react-bootstrap';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
        }
    }
    valid(){
        if(!this.state.email.includes("@") && this.state.password.length<8)
        {
            this.setState({emailError: "*Invalid Name", passwordError: "*Password is less than 8"})
        }
        else if(!this.state.email.includes("@")){
            this.setState({emailError: "*Invalid Name"})
        }
        else if(this.state.password.length<8){
            this.setState({passwordError: "*Password is less than 8"})
        }
        else{
        return true;
        }
    }
    submit()
    {
            this.setState({emailError: "", passwordError: ""})
        
        if(this.valid())
        {
            alert("form is submitted")
        }
    }
    render() {
        return (
            <div>
                <Container className='main'>
                    <Card className='card'>
                        <Card.Body className='body'>
                            <Card.Title>Login Form</Card.Title><br />
                            <Card.Text>
                            <Form.Control type='text' name='email' placeholder='Enter your email'
                                    onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                <p>{this.state.emailError}</p>
                                <Form.Control type='password' name='password' placeholder='Enter Password'
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                <p>{this.state.passwordError}</p>
                                <Button onClick={() => this.submit()}>Submit</Button>
                                </Card.Text>
                            <Card.Link className='forgot'  href="#">Forgot password?</Card.Link>
                            <Card.Link className='register' href="/register">Register Here</Card.Link>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Login;