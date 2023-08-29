import React from 'react';
import { Link } from 'react-router-dom';

import Banner from './page/bannerslide';
import Navgaition from './page/Navgaition';

import './page/css/index.css';

function App() {
  return (
    <div className='container'>
      <Navgaition />
      <Banner />
    </div>
  );
}

export default App;
