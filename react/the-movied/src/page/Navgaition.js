import React from 'react';
import { Link } from 'react-router-dom';


function Navgaition() {
    return (
        <nav>
          <h1>
            YFLIX
          </h1>
          <ul>
            <li Link to="/Home">Home</li>
            <li Link to="/Movies">Movies</li>
            <li Link to="/TV Servies">TV Servies</li>
          </ul>
        </nav>
    );
  }
  
  export default Navgaition;
  