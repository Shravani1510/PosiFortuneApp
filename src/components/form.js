import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

import messages from './messages';  // Import the messages
import NavBar from './NavBar';
import Footer from './Footer';


function Form() {
  const [name, setName] = useState('');
  const [luckyNumber, setLuckyNumber] = useState('');
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Select a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const fullMessage = `Hello ${name}!\n${randomMessage}`;
    // Navigate to the MessagePage and pass the message as state
    navigate('/message', { state: { message: fullMessage } });

    // Send data to the backend 
    //https://web-production-a6ef5.up.railway.app/

    // try {
    //   const response = await fetch('https://web-production-a6ef5.up.railway.app/api/saveUser', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name: name,
    //       luckyNumber: luckyNumber,
    //       message: randomMessage,
    //     }),
    //   });

    //   const data = await response.json();
    //   if (data.success) {
    //     console.log('User saved successfully!');
    //   } else {
    //     console.error('Failed to save user');
    //   }

    //   // Navigate to the MessagePage and pass the message as state
    //   navigate('/message', { state: { message: fullMessage } });
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <div className="form-container">
      <NavBar/>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <h1>Whisper of Hope </h1>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="birthday">Your Lucky Number:</label>
            <input
              type="number"
              id="luckyNumber"
              value={luckyNumber}
              onChange={(e) => setLuckyNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Get Message</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Form;
