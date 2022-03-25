import React from 'react'
import '../Css/Trend.css'
import Profile from './Profile'

function Trend() {
  return (
    <div className='trend'>
      <div className='widget_input'>
        <input type='text' placeholder='Search Twitter' />  
      </div>
      <div className='widgets_widgetContainer'>
        <h2>What's happening</h2>  
      </div>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </div>
  )
}

export default Trend