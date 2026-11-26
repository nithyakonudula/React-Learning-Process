//import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>Logo</li>
        </ul>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Feedback</li>
        </ul>
        <button className={styles.btn}>Navbar button</button>
      </nav>
    </div>
  )
}

export default Navbar
