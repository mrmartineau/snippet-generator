import React, { Component } from 'react'

class RadioButton extends Component {
  render () {
    return <label className='control control--custom'>
      <input className='control--custom-input' type='radio' {...this.props} />
      <span className='control-indicator control-indicator--radio' />
      My Radio Button Label Text
    </label>
  }
}

module.exports = RadioButton
