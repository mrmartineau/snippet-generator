import React from 'react'

const Button = ({ primary, type, value }) => {
  let className = 'btn'
  if (primary) {
    className += ' btn--primary'
  }
  return <input className={className} type={type} value={value} />
}

module.exports = Button
