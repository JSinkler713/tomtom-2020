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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    return.fetch('http://#', {
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
          type='text'
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            placeholder='Email'
            name='email'
            onChange={this.handleChange}
            value={this.email}
          />
          <input
            type='text'
            placeholder='Password'
            name='password'
            onChange={this.handleChange}
            value={this.password}
          />
          <input
            type='text'
            placeholder='Name'
            name='name'
            onChange={this.handleChange}
            value={this.name}
          />
          <input
            type='text'
            placeholder='Company Name'
            name='company_name'
            onChange={this.handleChange}
            value={this.company_name}
          />
          <input
            type='text'
            placeholder='Street Address'
            name='street_address'
            onChange={this.handleChange}
            value={this.street_address}
          />
          <input
            type='text'
            placeholder='City'
            name='city'
            onChange={this.handleChange}
            value={this.city}
          />
          <select
            name='state'
            onChange={this.handleChange}
            value={this.state}
          >
            <option value='Alabama'>Alabama</option>
            <option value='Alaska'>Alaska</option>
            <option value='Arizona'>Arizona</option>
            <option value='Arkansas'>Arkansas</option>
            <option value='California'>California</option>
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
          <input
            type='text'
            placeholder='Zip Code'
            name='zip_code'
            onChange={this.handleChange}
            value={this.zip_code}
          />
          <input
            type='text'
            placeholder='Phone Number'
            name='phone_number'
            onChange={this.handleChange}
            value={this.phone_number}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateUserForm
