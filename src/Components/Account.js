import React from 'react';
import '../Css/Account.css';
import Tab from './Tab';

function Account() {
  return (
    <div className='Account'>
      <div className='account_holder_wallpaper'>
        
      </div>
      <div className='account_holder_profile_image'>
        <img src='/Images/profile.jpg' alt='profile' />
      </div>
      <div className='account_holder_detials'>
        <div className='account_holder_name'>
          <h2>Kiran</h2>  
        </div>
        <div className='account_holder_twitter_name'>
          <p>Kiran@0777</p>  
        </div>  
        <div className='count'>
          <div className='following'>
            <p><span>777</span> Follwing</p>  
          </div>  
          <div className='followers'>
            <p><span>77.7M</span> Follwers</p>  
          </div>  
        </div>
      </div>

      <div className='profile_navigations'>
        <Tab />
      </div>

    </div>
  )
}

export default Account