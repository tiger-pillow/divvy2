import React, {Component} from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import './Infofill.css';

class Infofill extends Component {
	constructor () {
		super()
		this.state = {
			fname: null,
			email: '',
			phone: '',
			time: '',
		}
	}

	handleChange = (event) => {
		console.log(event.target.value)
		console.log(event.target.name)
		this.setState ({ [event.target.name]: event.target.value })
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.state
	}

	render() {
		return (
			<div className = "formbox">
				{console.log(this.state)}
				<Col sm={{span:8, offset:2}} md = {{ span: 6, offset:3 }} className = "border border-secondary" >
					
					<Form onSubmit = {this.handleChange}>
					
					<Form.Group controlId="formFname">
					    <Form.Label>First name</Form.Label>
					    <Form.Control type="fname" name= "fname" placeholder="'Jane'" onChange = {this.handleChange} />
					</Form.Group>

				 	<Form.Group controlId="formBasicEmail">
					    <Form.Label>Email address</Form.Label>
					    <Form.Control type="email" name = "email" placeholder="'jane.doe@yale.edu'" onChange = {this.handleChange}/>
					</Form.Group>
				

				 	<Form.Group controlId="formPhone">
					    <Form.Label>Phone number</Form.Label>
					    <Form.Control type="phone" name = "phone" placeholder="'2031111111'" onChange = {this.handleChange}/>
					</Form.Group>

					<Button variant="primary" type="submit" className = "center">
					    Next
					</Button> {/*this button needs to be centered and style changed*/}
					</Form>
				</Col>
			</div> 
			
		);
	}





}

export default Infofill 