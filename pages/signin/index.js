import React from 'react'
import Link from 'next/link'
import styles from './signin.module.css'
import Navbar from '../../components/navbar'
import {signIn, signOut,useSession} from 'next-auth/react'
// import {Providers} from 'next-auth/react'
import { useState } from 'react';
function SignIn() {
  const {data: session}=useSession();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const signInUser= async ()=>{
    const options={
      redirect:false,
      email,
      password
    }
  const user =   await signIn("credentials", options);
  console.log(user);
  }
  console.log(session);
  return (
    <div className={styles.signup_container}>
        <Navbar/>
        
        <div className={styles.signup_box}>
        <h1>E-diary</h1>
        <div className={styles.singup_inputs}>
        <input type="text" placeholder="Enter email" value = {email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)}/>    
        </div>
        {!session && <button onClick={signInUser} >Sign In</button>}
        {session && <button onClick={signOut}>sign out</button>}
        <div>Dont Have An Account? </div>
        <Link href="/signup">signup</Link>
        </div>
        <footer>this is the footer</footer>
    </div>
  )
}

export default SignIn