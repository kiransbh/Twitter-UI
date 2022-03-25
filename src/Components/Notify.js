import React,{ useState } from 'react';
import '../Css/Notify.css';

function Notify() {

  const[State, setState] = useState(1);

  const Tab = (index) => {
      setState(index);
  }

  return (
    <div className='notify'>
      <div className='notify_header'>
          <h3>Notification</h3>    
      </div>

      <div className='notify_container'>
        <div className='notify_block_tabs'>
          <p 
          className={State === 1 ? 'notify_tabs' : 'notify_tabs-active-tabs'}
          onClick={() => Tab(1)}>All</p>
          <p 
          className={State === 2 ? 'notify_tabs' : 'notify_tabs-active-tabs'}
          onClick={() => Tab(2)}>Mentions</p>     
        </div>

        <div className='notify_content_tabs'>
            <div
            className={State === 1 ? 'notify_content-active-content' : 'notify_content'}>
                <h1>You don't have any Notifications yet</h1>
                <p>
                    When you post Tweet or Retweet or photo or videos or mentions,<br />it will show up here.
                </p>
            </div>    
            <div
            className={State === 2 ? 'notify_content-active-content' : 'notify_content'}>
                <h1>Nothing to see here -- yet</h1>
                <p>
                    When someone mentions you, you'll find it here.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Notify