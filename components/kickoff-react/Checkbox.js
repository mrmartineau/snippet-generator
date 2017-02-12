import React, { Component } from 'react'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: props.checked || false
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    const checked = !this.state.checked
    this.setState({ checked })
  }

  render () {
    let className = 'control-indicator control-indicator--checkbox'
    if (this.props.tickbox) {
      className = 'control-indicator control-indicator--tickbox'
    }
    return <label className='control control--custom' htmlFor={this.props.id}>
      <input className='control--custom-input' type='checkbox' {...this.props} checked={this.state.checked} onChange={this.onChange} />
      <span className={className} />
      My checkbox Button Label Text
    </label>
  }
}

module.exports = Checkbox
