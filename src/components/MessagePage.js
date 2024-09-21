import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Import useLocation to access state
import './Style/MessagePage.css';  // Import CSS for styling
import NavBar from './NavBar';
import Footer from './Footer';

function MessagePage() {
  const location = useLocation();  // Get the state passed from Form.js
  const { message } = location.state || { message: '' };  // Fallback in case no message is passed
  const navigate = useNavigate();  // Initialize the navigate function

  const handleBackToForm = () => {
    navigate('/');  // Navigate back to the root (form) page
  };

    // Extract the name and the random message
    const [greeting, randomMessage]= message.split('\n');
  

  return (
    <div className="message-container">
      <NavBar/>
      <div>
        <p className="greeting">{greeting}</p>   
        <p className="random-message">{randomMessage}</p>  
      </div>
      <div>
        {/* Add button to navigate back */}
      <button onClick={handleBackToForm} className="back-button">Back to Form</button>  {/* Add button to navigate back */}
      </div>
      <Footer/>
    </div>
  );
}

export default MessagePage;
