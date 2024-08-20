import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets';
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Onyi.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                   <p>Suggest awesome locations for a road trip</p> 
                   <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                   <p>Suggest best practices to achieve zen. </p> 
                   <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                   <p>Suggest top ten books that every man should read before he dies.</p> 
                   <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                   <p>Briefly summarize the coding concepts and best practices</p> 
                   <img src={assets.code_icon} alt="" />
                </div>
            </div>
            {/*creating an input box*/}
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter your prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                Simply make small changes unique to your query and edit the placeholder text Gemini crafted for you.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Main;