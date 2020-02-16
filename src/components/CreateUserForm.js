import React, { Component } from 'react'

class CreateUserForm extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    company_name: '',
    street_address: '',
    city: '',
    state: '',
    zip_code: '',
    phone_number: ''
  }

  handleUserChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUserSubmit = (event) => {
    event.preventDefault()
    return fetch('http://localhost:9000/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        company_name: this.state.company_name,
        street_address: this.state.street_address,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zip_code,
        phone_number: this.state.phone_number
      })
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        email: '',
        password: '',
        name: '',
        company_name: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        phone_number: ''
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <h1>User Signup</h1>
        <form
          className='user-signup'
          type='text'
          onSubmit={this.handleUserSubmit}
        >
          <p>Email</p>
          <input
            type='text'
            name='email'
            onChange={this.handleUserChange}
            value={this.email}
          /> <br/>
          <p>Password</p>
          <input
            type='text'
            name='password'
            onChange={this.handleUserChange}
            value={this.password}
          /> <br/>
          <p>Name</p>
          <input
            type='text'
            name='name'
            onChange={this.handleUserChange}
            value={this.name}
          /> <br/>
          <p>Company Name</p>
          <input
            type='text'
            name='company_name'
            onChange={this.handleUserChange}
            value={this.company_name}
          /> <br/>
          <p>Street Address</p>
          <input
            type='text'
            name='street_address'
            onChange={this.handleUserChange}
            value={this.street_address}
          /> <br/>
          <p>City</p>
          <input
            type='text'
            name='city'
            onChange={this.handleUserChange}
            value={this.city}
          /> <br/>
          <p>State</p>
          <select
            name='state'
            onChange={this.handleUserChange}
            value={this.state}
          >
            <option value='Alabama'>Alabama</option>
            <option value='Alaska'>Alaska</option>
            <option value='Arizona'>Arizona</option>
            <option value='Arkansas'>Arkansas</option>
            <option selected value='California'>California</option>
            <option value='Colorodo'>Colorodo</option>
            <option value='Connecticut'>Connecticut</option>
            <option value='Delaware'>Delaware</option>
            <option value='Florida'>Florida</option>
            <option value='Georgia'>Georgia</option>
            <option value='Hawaii'>Hawaii</option>
            <option value='Idaho'>Idaho</option>
            <option value='Illinois'>Illinois</option>
            <option value='Indiana'>Indiana</option>
            <option value='Iowa'>Iowa</option>
            <option value='Kansas'>Kansas</option>
            <option value='Kentucky'>Kentucky</option>
            <option value='Louisiana'>Louisiana</option>
            <option value='Maine'>Maine</option>
            <option value='Maryland'>Maryland</option>
            <option value='Massachusetts'>Massachusetts</option>
            <option value='Michigan'>Michigan</option>
            <option value='Minnesota'>Minnesota</option>
            <option value='Mississippi'>Mississippi</option>
            <option value='Missouri'>Missouri</option>
            <option value='Montana'>Montana</option>
            <option value='Nebraska'>Nebraska</option>
            <option value='Nevada'>Nevada</option>
            <option value='New Hampshire'>New Hampshire</option>
            <option value='New Jersey'>New Jersey</option>
            <option value='New Mexico'>New Mexico</option>
            <option value='New York'>New York</option>
            <option value='North Carolina'>North Carolina</option>
            <option value='North Dakota'>North Dakota</option>
            <option value='Ohio'>Ohio</option>
            <option value='Oklahoma'>Oklahoma</option>
            <option value='Oregon'>Oregon</option>
            <option value='Pennsylvania'>Pennsylvania</option>
            <option value='Rhode Island'>Rhode Island</option>
            <option value='South Carolina'>South Carolina</option>
            <option value='South Dakota'>South Dakota</option>
            <option value='Tennessee'>Tennessee</option>
            <option value='Texas'>Texas</option>
            <option value='Utah'>Utah</option>
            <option value='Vermont'>Vermont</option>
            <option value='Virginia'>Virginia</option>
            <option value='Washington'>Washington</option>
            <option value='West Virginia'>West Virginia</option>
            <option value='Wisconsin'>Wisconsin</option>
            <option value='Wyoming'>Wyoming</option>
          </select> <br/>
          <p>Zip Code</p>
          <input
            type='text'
            name='zip_code'
            onChange={this.handleUserChange}
            value={this.zip_code}
          /> <br/>
          <p>Phone Number</p>
          <input
            type='text'
            name='phone_number'
            onChange={this.handleUserChange}
            value={this.phone_number}
          /> <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateUserForm
