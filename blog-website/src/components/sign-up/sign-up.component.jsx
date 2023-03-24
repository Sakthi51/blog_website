import { auth } from "../utils/firebase.config";
import { createUserWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
import { useState,useEffect,Fragment,useContext } from "react";
import SignIn from "../sign-in/sign-in.component";
import './sign-up.style.css'
import { UserContext } from "../contexts/user.context";

const Signup = () => {

    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const {user,setUser} = useContext(UserContext)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            console.log("onauth")
            setUser(currentUser);
     
        });
        
    
    }, [user])


    const handleSignUpSubmit = async () => {
        console.log('handlesign')
        try{
           const user = await createUserWithEmailAndPassword(auth,userEmail,userPassword)
           console.log(user)
           document.querySelector('.sign-up-email').value = " " 
           document.querySelector('.sign-up-password').value = " " 
           
        
        }catch(err){
            alert('Your email Already exists so kindly Login')
        }
        console.log(auth.currentUser)
    }



    const handleSignOut = async () => {
        console.log('signout')
        await signOut(auth)
    }
    
    return(
        // <div className="login-signUp">
            <section className="sign-up-form">
                <h1>Sign Up with email</h1>
                <h3>Enter your email and password</h3>

                <div className="form-section">
                <label>Your Email</label>
                <input type="email" onChange={e => setUserEmail(e.target.value)} className="sign-up-email"/>

                <label>Your Password</label>
                <input type="password" onChange={e => setUserPassword(e.target.value) }  className="sign-up-password"/>
                <button className="sign-up-button" onClick={handleSignUpSubmit}>Sign up</button>
                <button onClick={handleSignOut}>Sign Out</button>
                {/* <p>{user?.email}</p> */}
                </div>
               
            </section>
        // </div>

    )
}

export default Signup





