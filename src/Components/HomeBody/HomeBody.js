import React from 'react'
import './HomeBody.css'
import homeBodyImage from '../../assets/images/homeBodyImage.png'

function HomeBody() {
    return (
        <div className="homeBody">
            <div className="homeBodyComponent" >
               <span className="opportinitiesText">
               CONNECTING YOU TO 
               </span>
               <br />
               <span className="meaningFulText">
                   MEANINGFUL
               </span>
               <br />
               <span className="opportinitiesText">
               OPPURTUNITIES
               </span>
            </div>
            <div className="homeBodyComponent">
               {/* <img className="homeBodyImage" max-width="697px" height="679px" src={homeBodyImage} alt="" /> */}
               <img className="homeBodyImage" max-width="697px" height="679px" src={homeBodyImage} alt="" />

            </div>
        </div>
    )
}

export default HomeBody
