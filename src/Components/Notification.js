import React from 'react';
import '../Css/Notification.css';
import Sidebar from './Sidebar';
import Notify from './Notify';
import Trend from './Trend';

function Notification() {
  return (
    <div className='Notification'>
        <Sidebar />
        <Notify />
        <Trend />
    </div>
  )
}

export default Notification