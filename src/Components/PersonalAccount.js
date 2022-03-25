import React from 'react';
import '../Css/PersonalAcc.css'
import Sidebar from './Sidebar';
import Account from './Account';
import Trend from './Trend';

function PersonalAccount() {
  return (
    <div className='Personalacc'>
      <Sidebar />
      <Account />
      <Trend />  
    </div>
  )
}

export default PersonalAccount