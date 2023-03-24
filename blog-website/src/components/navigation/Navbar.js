import React  from 'react'
import './Navstyle.css'
import Profile from './profileImg.jpg'
import Icon from './Writeicon.png'
import Logo from './medium.png';


export default function Navbar() {
  
  return (
    <nav>
        <div className='nav-1'>
        
        <img src={Logo} className="logo"/>
        
        <div className='Searchbar'>
           <input type="text" placeholder="Search blog's here" />
        </div>
        </div>
        <div className='nav-2'>
        
          <ul>
            <li><img className='Icon' src={Icon} alt='write'/></li>
            <li><a href='index.html'>Write</a></li>
            <li><a href='index.html'>Your blog's</a></li>
            <li><a href='index.html'>About</a></li>
            <li><a href='index.html'>Log in</a></li>
            <li><a href='index.html'>Sign out</a></li>
          </ul>
          <li><img className='Signin' src={Profile} alt='userImg' /></li>
          
          
          {/* <div className='sub-menu-wrap' id='subMenu'>
            <div className='sub-menu'>
                <div className='user-info'>
                    <img src={Profile} alt='user-profile'/> 
                    <h2>MythiliVenugopal</h2>
                </div>
                <hr/>
                <a href='#' className='sub-menu-link'>
                  <p>Profile</p>
                  <span>></span>
                </a>
                <a href='#' className='sub-menu-link'>
                  <p>Library</p>
                  <span>></span>
                </a>
                <a href='#' className='sub-menu-link'>
                  <p>Stories</p>
                  <span>></span>
                </a>
                <a href='#' className='sub-menu-link'>
                  <p>Status</p>
                  <span>></span>
                </a>
                <a href='#' className='sub-menu-link'>
                  <p>Logout</p>
                  <span>></span>
                </a>
            </div>
          </div> */}
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