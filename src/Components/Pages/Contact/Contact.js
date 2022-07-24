import React from 'react'

const Contact = ({createPanelsRefs}) => {
    return (
      <section ref={(e)=>createPanelsRefs(e,4)}><h1>Contact Me</h1></section>
    )
  }
  

export default Contact