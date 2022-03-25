import React from 'react';
import '../Css/TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetbox'>
    <form>
        <div className='tweetbox_input'>
            <img src='/Images/profile.jpg' width={30} height={30} alt='avatar' />
            <input placeholder="what's happening?"/>
        </div>
        <button type='submit'>
            Tweet    
        </button>  
    </form>
    </div>
  )
}

export default TweetBox