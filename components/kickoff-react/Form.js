import React from 'react'

export const Form = ({ children, horizontal }) => {
  let className = 'form'
  if (horizontal) {
    className += ' form--horizontal'
  }
  return <form className={className}>{children}</form>
}
