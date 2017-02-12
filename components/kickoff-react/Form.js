import React from 'react'

const Form = ({ children, horizontal }) => {
  let className = 'form'
  if (horizontal) {
    className += ' form--horizontal'
  }
  return <form className={className}>
    {children}
  </form>
}

module.exports = Form
