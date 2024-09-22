import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function smilepage() {    
  return (
    <div className='smile-container'>
        <div>
            <NavBar/>
            <h1>Smile Page</h1><br/>
            {/* <p>This is the Smile page!</p><br/> */}
            <p>
            A smile can lift the mood of you and others, making the world around you a happier place.<br/>
            <br/>Smiling reduces stress by releasing endorphins.<br/>
            <br/>It boosts your immune system and helps you live longer.
            </p><br/>
            <img src="./favicon15.jpg" alt="Smile" /><br/>
        </div>

        <Footer/>
        
        
    </div>
  )
}

export default smilepage