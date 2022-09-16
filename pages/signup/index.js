import React from 'react'
import Link from 'next/link'
import styles from './signup.module.css'
import Navbar from '../../components/navbar'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineGithub} from 'react-icons/ai'
function SignUp() {
  return (
    <div className={styles.signup_container}>
        <Navbar/>
        
        <div className={styles.signup_box}>
        <h1>E-diary</h1>
        <div className={styles.singup_inputs}>
        <input type="text" placeholder="Enter name" />
        <input type="text" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />    
        </div>
        <button>Sign Up</button>
        <div>Alreay Have An Account? </div>
        <Link href="/signin">signin</Link>
        <div>Or Login With</div>
        <div className={styles.signup_icons}>
          <FcGoogle size={30}/>
          <AiOutlineGithub size={30}/>
        </div>
        </div>

        <footer>this is the footer</footer>
    </div>
  )
}

export default SignUp