import React from 'react';
import styles from './Header.module.css';
import logo from '../../Assets/myLogo.svg';

const Header = () => {
  const navItem = [
    { id: 1, title: 'About' },
    { id: 2, title: 'Experince' },
    { id: 3, title: 'Work' },
    { id: 4, title: 'Contact' },
  ];
  return (
      <div className={styles.headerContianer}>
      <img src={logo} alt="Main page logo" style={{height:60}} />
      <ul style={{ listStyleType: 'none' }} className={styles.navContainer}>
        {navItem.map(({id,title}) => (
          <NavItem key={id} index={id} text={title} />
        ))}
          </ul>
    </div>
  )
}

export default Header;

const NavItem = ({index,text}) => {
  return (
        <li>
          <span>{index}.</span>
          <p>{text}</p>
        </li>
  )
}