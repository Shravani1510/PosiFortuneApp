import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router
import './App.css'; // Import the styling
import Main from './components/Main';



function App() {
  return (
    <Router>  {/* Ensure Router wraps everything that uses Routes */}
      <div className="App">
        <Main /> {/* Main contains Routes, so Router must wrap this */} 
      </div>
    </Router>
  );
}

export default App;
