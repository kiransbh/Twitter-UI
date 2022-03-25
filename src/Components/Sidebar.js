import React,{ useState } from 'react';
import '../Css/Sidebar.css';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from './SidebarOption';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sidebar() {

  const TwitterDetials = useSelector((state) => state.post.value);

  const vals = [[<Link to='/Home' style={{textDecoration:'none', color:'black'}}>Home</Link>, <HomeIcon />],
  [<Link to='/Error' style={{textDecoration:'none', color:'black'}}>Explore</Link>, <TagIcon />],
  [<Link to='/Notification' style={{textDecoration:'none', color:'black'}}>Notification</Link>, <NotificationsIcon />],
  [<Link to='/Error' style={{textDecoration:'none', color:'black'}}>Messages</Link>, <MailOutlineIcon />],
  [<Link to='/Error' style={{textDecoration:'none', color:'black'}}>Bookmarks</Link>, <BookmarkBorderIcon />],
  [<Link to='/Error' style={{textDecoration:'none', color:'black'}}>Lists</Link>, <ListAltIcon />],
  [<Link to='/PersonalAccount' style={{textDecoration:'none', color:'black'}}>Profile</Link>, <PermIdentityIcon />],
  [<Link to='/Error' style={{textDecoration:'none', color:'black'}}>More</Link>, <MoreHorizIcon />]]

  const[tweet, setTweet] = useState(false);
  return (
    <>
    <div className='sidebar'>
      <div className='icon'>
        <img src='/Images/twitter.png' width={30} height={30} alt='icon' />
      </div>
      {
        vals.map((e, index) => {
          return(
            <SidebarOption 
            key={index}
            Icon = { e[1] }
            text= { e[0] } 
            /> )
        })
      }
      <br />
      <button type='submit' onClick={() => setTweet(true)}>Tweet</button>
      <button type='submit' className='logout'><Link to='/' style={{textDecoration:'none'}}>{ TwitterDetials.displayname }</Link></button>
    </div>

    <TweetPopup show={tweet}>
      <CloseIcon className='close' onClick={() => setTweet(false)}/>
      <button type='submit'>Tweet</button>  
    </TweetPopup>
    </>
  )
}

export default Sidebar

const TweetPopup = styled.div`
  width:40vw;
  height:38vh;
  background-color:white;
  position:absolute;
  top:25%;
  left:46.5%;
  transform:translate(-50%,-50%);
  border-radius:24px;
  z-index:9999999999;
  display:${props => props.show ? 'block' : 'none'};

  .close{
    margin:15px;
    text-align:center;
    cursor:pointer;
    width:24px;
    height:24px;

    :hover{
      border-radius:50%;
      background-color:rgba(0,0,0,0.1);
    }
  }

  button{
    width: 72px;
    height: 30px;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: var(--btn-color);
    background-color: var(--btn-background);
    outline: none;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin:30% 86%;
}
`