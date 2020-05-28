import React from 'react'

export const Control = ({ children, error, success, warning }) => {
  let className = 'form-controlGroup'
  if (success) {
    className += ' has-success'
  } else if (error) {
    className += ' has-error'
  } else if (warning) {
    className += ' has-warning'
  }
  return <div className={className}>{children}</div>
}
