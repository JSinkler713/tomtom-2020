import React, { Component } from 'react'

class CreateDonationForm extends Component {
  state = {
    pickup_time: '',
    feeds_quantity: '',
    fits_car: '',
    additional_info: '',
    processing: 'available',
    food_types: []
  }

  getFoodTypes = () => {
    return fetch('http://#')
      .then(res => res.json())
      .then(data => this.setState({ food_types: data }))
      .catch(err => console.log('error fetching food types', err))
  }

  handleDonationChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDonationSubmit = (event) => {
    event.preventDefault()
    return fetch('http://#', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pickup_time: this.state.pickup_time,
        feeds_quantity: this.state.feeds_quantity,
        fits_car: this.state.fits_car,
        additional_info: this.state.additional_info,
        processing: this.state.processing
      })
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        pickup_time: '',
        feeds_quantity: '',
        fits_car: '',
        additional_info: ''
      })
    })
  }

  render() {
    return(
      <div>
        <form
          type='text'
          onSubmit={this.handleDonationSubmit}
        >
          <input
            type='text'
            placeholder='Pickup Time'
            name='pickup_time'
            onChange={this.handleDonationChange}
            value={this.pickup_time}
          >
        </form>
      </div>
    )
  }
}

export default CreateDonationForm
