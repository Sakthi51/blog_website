import { useState } from "react";
import Card from "./card";
import "./Content.css"

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };




    return (
        <div className="container">
            <div className="bloc-tabs" id="sticky-tab">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Recommendations
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Following
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Favourites
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <Card 
                    title="5 React useState Mistakes"
                    imageUrl="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Card 
                    title="11 mistakes that are easy to make in React"
                    imageUrl="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600"
                    
                    />
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                   <Card 
                   title="JavaScript Problem Solvers: "
                   imageUrl="https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=400"
                   />
                   <Card title="Don’t Be a Nice Person. "
                   imageUrl="https://miro.medium.com/v2/resize:fill:140:140/1*7qu9lerW60kWPx00do1cdw.png"/>

                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >

                    <Card title="Creating A PopUp Window Using JS And React"
                    imageUrl="https://miro.medium.com/v2/resize:fill:140:140/0*G1srBX16-tQrCPd8"/>
                    <Card title="Modals in React with the useModal Hook"
                    imageUrl="https://miro.medium.com/v2/resize:fill:140:140/1*aE0jkOOH0nCYjwT88tdw1Q.png"/>
        
                </div>
            </div>
        </div>
    );
}

export default Tabs;