import React from 'react';
import '../Css/SidebarOption.css';


function SidebarOption({Icon, text}) {
  return (
    <div className='sidebar_option'>
      { Icon }
      <p className='option'>{ text }</p>
    </div>
  )
}

export default SidebarOption