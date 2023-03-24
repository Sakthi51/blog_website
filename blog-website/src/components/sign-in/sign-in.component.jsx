import { useState,useContext } from "react"
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../utils/firebase.config"

import { UserContext, UserProvider } from "../contexts/user.context"

const SignIn = () => {
    const [loginEmail,setLoginEmail] = useState('')
    const [loginPassword,setLoginPassword] = useState('')

    const {user,setUser} = useContext(UserContext)
    
    

   const handleSignIn =async () => {
    try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
        setUser(user)
        console.log(user.email)
    }
    catch(err){
        alert('You are not a existing user so kindly Sign up your account')
    }

   }

    return(
           <section className="sign-in-form" >
                 <h1>Login with email</h1>
                 <h3>Enter your email and password</h3>

                <div className="form-section">
                    <label>Your Email</label>
                    <input type="email" onChange={e => setLoginEmail(e.target.value)} />

                    <label>Your Password</label>
                    <input type="password" onChange={e => setLoginPassword(e.target.value)}/>
                    <button onClick={handleSignIn}>Sign In</button>
                    <p>{user?.email}</p>
                </div>
           </section>
    )
}

export default SignIn