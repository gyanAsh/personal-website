import React from 'react'

const Home = ({createPanelsRefs}) => {
  return (
    <section ref={(e)=> createPanelsRefs(e,0)} ><h1>Home</h1></section>
  )
}

export default Home