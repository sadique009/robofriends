import React from 'react'

const Scroll = ({children}) => {
  return (
    <div style={{overflowY:"scroll", margin:"20px",  height:"800px"}}>
      {children}
    </div>
  )
}

export default Scroll
