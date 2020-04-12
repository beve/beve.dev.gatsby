import React from 'react'
import Cursor from './cursor'

export default ({ children }) => {
  return (
    <div>
      {children}
      <Cursor />
    </div>
  )

}