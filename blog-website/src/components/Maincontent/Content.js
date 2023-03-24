import React from "react"
import Card from "./card"
import Membership from "./membership"
import Tabs from "./Tab"
import "./Content.css"
import Navbar from "./navbar"


export default function Maincontent() {
    return (

        <body>
            <Navbar/>
            <Membership />
            <Card 
            title="5 React useState Mistakes"
            imageUrl="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Tabs />
            

        </body>


    )
}