import React from 'react'

const Work = ({createPanelsRefs}) => {
    return (
      <section id="work" ref={(e)=>createPanelsRefs(e,2)}><h1>Selected Work</h1></section>
    )
  }

export default Work