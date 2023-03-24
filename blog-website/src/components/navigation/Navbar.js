import React,{useContext}  from 'react'
import './Navstyle.css'
import Profile from './profileImg.jpg'
import Icon from './Writeicon.png'

import {Link} from 'react-router-dom';
import { UserContext } from '../contexts/user.context';



export default function Navbar() {
  
  const {user,setUser} = useContext(UserContext)
  console.log(user)
  
  return (
    <nav>
        <div className='nav-1'>
      
        {/* <img src={Logo} className="logo"/>
        
        <div className='Searchbar'>
           <input type="text" placeholder="Search blog's here" />
        </div> */}
        <h2>Blogy</h2>
        <p>{user?.email}</p>

        </div>
        <div className='nav-2'>
        
          <ul>
            <li><img className='Icon' src={Icon} alt='write'/></li>
            <Link to='/write'>write</Link>
            <Link to='/your-blog'>Your Blog</Link>
            <Link to='/login'>Login</Link>
            <Link to='/sign-up'>Sign Up</Link>
          </ul>
          <li><img className='Signin' src={Profile} alt='userImg' /></li>
          
         
        </div>
    </nav>
  )
}

// function DropdownItems(props){
//   return(
//     <li className='dropdownItem'>
//       {/* <img src={props.img}></img> */}
//       <a>{props.text}</a>
//     </li>
//   )
// }