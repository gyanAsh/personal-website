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
        I build things for fun.
      </h1>
      <p>I'm a software enthusiast who dream of creating somthing new and helpful for the community or businesses.
        <br />
        <span>Currently : </span>
        I'm working as a freelancer, helping small businesses and individuals through software.
      </p>
      </div>
      <div className={styles.selectedWork}>
        <p>Selected Work </p>
      </div>
      
    </section>
  )
}

export default Home