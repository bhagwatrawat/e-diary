import React from 'react'
import styles from './navbar.module.css'

import Link from 'next/link'
function Navbar() {
  return (
    <nav className={styles.home_navbar} >
      <img className={styles.home_navbar_logo} alt="logo" />
      <ul className={styles.home_navbar_nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar