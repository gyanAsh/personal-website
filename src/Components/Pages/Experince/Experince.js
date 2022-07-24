import React from 'react'

const Experince = ({createPanelsRefs}) => {
    return (
      <section ref={(e)=>createPanelsRefs(e,3)}><h1>My Experince</h1></section>
    )
  }

export default Experince