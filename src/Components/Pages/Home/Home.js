import React from 'react'
import styles from './Home.module.css';

const Home = ({createPanelsRefs}) => {
  return (
    <section ref={(e) => createPanelsRefs(e, 0)} className={styles.homeContainer} >
      <div className={styles.introContainer}>
        <h5>Hi, my name is</h5>
      <h1>
        Gyan Ashish Ekka
        <br />
        <h2>I build things for fun.</h2>
      </h1>
      <p>I'm a software enthusiast who helps create new and helpful tools for the community or businesses.
          <br />
          <div><span>Currently : </span>
        I'm working as a freelancer, helping small businesses and individuals through software.</div>
        
      </p>
      </div>
      <div className={styles.selectedWork}>
        <p>Selected Work </p>
      </div>
      
    </section>
  )
}

export default Home