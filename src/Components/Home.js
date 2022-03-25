import React from 'react';
import '../Css/Home.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Trend from './Trend';

function Home() {
  return (
    <div className='Home'>
        <Sidebar />
        <Feed />
        <Trend />    
    </div>
  )
}

export default Home