import React from 'react'

const Grid = ({ children, gutter, scaled, stack }) => {
  let className = 'g'
  if (gutter && scaled) {
    className += ' g--gutter--scaled'
  } else if (gutter) {
    className += ' g--gutter'
  }
  if (typeof stack === 'string') {
    className += ' g--stack--' + stack
  } else if (stack) {
    className += ' g--stack'
  }
  return <div className={className}>
    {children}
  </div>
}

module.exports = Grid
