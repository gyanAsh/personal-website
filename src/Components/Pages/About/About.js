import React from 'react'

const About = ({createPanelsRefs}) => {
  return (
    <section ref={(e)=>createPanelsRefs(e,1)}><h1>About</h1></section>
  )
}

export default About