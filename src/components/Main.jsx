import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';  // Import Routes and Route
import Form from './form';
import MessagePage from './MessagePage';
import SmilePage from './smilepage';  // Import SmilePage
import About from './About';



// Array of video paths
const videos = [
    require('../assets/videos/video1.mp4'),
    require('../assets/videos/video2.mp4'),
    require('../assets/videos/video3.mp4'),
    require('../assets/videos/video4.mp4'),
  ];

const Main = () => {

   // Get the current route using useLocation
   const location = useLocation();
  
     // Randomly select a video
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  // Render the video only if the route is NOT '/smile'
  const showVideo = location.pathname !== '/about' ;//&& location.pathname !== '/about';

  return (
    <div className='main'>
       {/* Conditionally render the video background */}
       {showVideo && <video src={randomVideo} autoPlay loop muted playsinline/>}
        {/* <video src={randomVideo} autoPlay loop muted /> */}
        <div className='content'>
        <Routes>
          <Route path="/" element={<Form />} /> {/* Form Route */}
          <Route path="/message" element={<MessagePage />} /> {/* MessagePage Route */}
          <Route path="/smile" element={<SmilePage />} /> {/* SmilePage Route */}
          <Route path='/about' element={<About />} />
        </Routes>
        </div>
        
    </div>
  )
}

export default Main