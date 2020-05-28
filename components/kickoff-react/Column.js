import React from 'react'

export const Column = ({ centered, children, mid, span }) => {
  let className = 'g-col'
  if (span) {
    className += ' g-span' + span
  }
  if (mid) {
    className += ' g-span' + mid + '--mid'
  }
  if (centered) {
    className += ' g-col--centered'
  }
  return <div className={className}>{children}</div>
}
