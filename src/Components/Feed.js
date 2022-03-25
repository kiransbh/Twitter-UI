import React from 'react'
import '../Css/Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className='feed'>
      <div className='feed_header'>
          <h3>Home</h3>    
      </div>

      <TweetBox />

      <Post
      text = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime quae aliquam. Quisquam nostrum sed, accusamus enim, blanditiis esse laborum, deserunt similique quos eius mollitia corporis! Impedit iusto incidunt necessitatibus adipisci vel esse, a, delectus beatae nobis provident eveniet. Distinctio repellendus ducimus iure ratione quis fugiat quae tempore mollitia porro.'}
      avatar = { '/Images/profile.jpg' }
      />
    </div>
  )
}

export default Feed