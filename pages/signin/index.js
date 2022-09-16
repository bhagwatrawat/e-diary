import React from 'react'
import Link from 'next/link'
import styles from './signin.module.css'
import Navbar from '../../components/navbar'
function SignIn() {
  return (
    <div className={styles.signup_container}>
        <Navbar/>
        
        <div className={styles.signup_box}>
        <h1>E-diary</h1>
        <div className={styles.singup_inputs}>
        <input type="text" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />    
        </div>
        <button>Sign Up</button>
        <div>Dont Have An Account? </div>
        <Link href="/signup">signup</Link>
        </div>
        <footer>this is the footer</footer>
    </div>
  )
}

export default SignIn