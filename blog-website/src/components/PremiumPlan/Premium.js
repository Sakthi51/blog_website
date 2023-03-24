import React from "react";
import { FaCheck } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import {Link} from 'react-router-dom'


const Premium = () => {
    return (
        <section className="main">
            <h1><i className="icon"><BsMedium /></i>Medium</h1>
            <div className="title">
                <h2>Get unlimited access to<br /> everything on Medium</h2>
                <span className="oneline"><center>Plans starting at less than $1/week. Cancel anytime.</center></span>
                <div className="items">
                    <p><i><FaCheck /></i><span>No ads</span> </p>
                    <p><i><FaCheck /></i> <span>Support quality writing</span></p>
                    <p><i><FaCheck /></i> <span>Access on any device</span></p>
                    <p><i><FaCheck /></i><span >Read offline with the Medium app</span></p>
                </div>
                <div className="card-container" >
                    <div className="card-column">
                        <div className=" card">
                            <h3>Monthly</h3>
                            <p>$5 USD/month</p><br />
                            <Link to="/pay">
                            <button className="button">Selected</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="card">
                            <h3>Annual</h3>
                            <p>$60$50 USD/year<br />(save $10)</p>
                            <br />
                            <Link to='/pay'>
                            <button className="button">Selected</button>
                            </Link>
                           
                            
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default Premium