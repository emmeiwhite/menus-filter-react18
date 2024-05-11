import React from 'react'

export default function Title({ children }) {
  return (
    <div className="title">
      <h2>{children || 'Default Title'}</h2>
      <div className="title-underline"></div>
    </div>
  )
}
