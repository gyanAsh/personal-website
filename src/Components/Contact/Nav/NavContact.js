import React from 'react';
import styles from './Nav.module.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FiTwitter,FiLinkedin } from 'react-icons/fi';

const NavContact = () => {
    const findMe = [
        {id:1,icon:<FaGithub/>},
        {id:2,icon:<FaInstagram/>},
        {id:3,icon:<FiTwitter/>},
        {id:4,icon:<FiLinkedin/>},
    ]
  return (
      <div className={styles.navContact} style={{bottom:0,left:0}}>
          {findMe.map(({id,icon,platform}) => (
              <FindMe key={id} icon={icon} platform={platform} />
          ))}
          <span></span>
    </div>
  )
}

export default NavContact

const FindMe = ({icon}) => {
    return (
        <div>
            {icon}
        </div>
    )
}