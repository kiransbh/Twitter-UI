import React,{ useState } from 'react'
import '../Css/Tab.css';

function Tab() {

    const[ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className='tab_container'>
        <div className='block_tabs'>
            <p 
            className={ToggleState === 1 ? 'tabs' : 'tabs-active-tabs'}
            onClick={() => toggleTab(1)}>Tweet</p>
            <p 
            className={ToggleState === 2 ? 'tabs' : 'tabs-active-tabs'}
            onClick={() => toggleTab(2)}>Replies</p>
            <p 
            className={ToggleState === 3 ? 'tabs' : 'tabs-active-tabs'}
            onClick={() => toggleTab(3)}>Media</p>
            <p 
            className={ToggleState === 4 ? 'tabs' : 'tabs-active-tabs'}
            onClick={() => toggleTab(4)}>Like</p>      
        </div>

        <div className='content_tabs'>
            <div
            className={ToggleState === 1 ? 'content-active-content' : 'content'}>
                <h4>You haven't Tweeted any text or photos or videos yet</h4>
                <p>
                    When you send Tweet with text or photos or videos in<br />them, it will show up here.
                </p>
            </div>    
            <div
            className={ToggleState === 2 ? 'content-active-content' : 'content'}>
                <h4>You haven't ReTweeted in any photos or videos yet</h4>
                <p>
                    When you send ReTweets in any photos or videos in<br />them, it will show up here.
                </p>
            </div>    
            <div
            className={ToggleState === 3 ? 'content-active-content' : 'content'}>
                <h4>You haven't Tweeted any photos or videos yet</h4>
                <p>
                    When you send Tweets with photos or videos in<br />them, it will show up here.
                </p>
            </div>    
            <div
            className={ToggleState === 4 ? 'content-active-content' : 'content'}>
                <h4>You dont't have any likes yet</h4>
                <p>
                    Tap the heart on any Tweet to show it some love.<br />When you do, it'll show up here.
                </p>
            </div>    
        </div>
    </div>
  )
}

export default Tab