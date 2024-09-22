import React from 'react';
import './Style/About.css';  // Import the CSS file for the About page
import NavBar from './NavBar';
import Footer from './Footer';


function About() {
  return (
    <div className="about">
      <NavBar/>
      <div className='about-container'>
        <h1>About Us</h1><br/>
        <p>Learn more about DailyDoseOfJoy and my mission to spread positivity!</p><br/>
        <p>
            I believe in the power of a smile, a kind word, or a small gesture to make someone's day.<br/><br/>
            At DailyDoseOfJoy, I aim to share positive messages every day to inspire and uplift.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
