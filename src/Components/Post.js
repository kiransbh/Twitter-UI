import React,{ useState, useEffect, useRef } from 'react';
import '../Css/Post.css';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkIcon from '@mui/icons-material/Link';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSelector } from 'react-redux';

function Post(
    {
    text,
    avatar
})
{
    const ShareRef = useRef();
    const TweetRef = useRef();

    const[retweet, setRetweet] = useState(false);
    const[share, setShare] = useState(false);
    const[DeleteTweet, setDeleteTweet] = useState(false);

    const TwitterDetials = useSelector((state) => state.post.value);

    const[like, setLike] = useState({
        state: false,
        number: '0',
    });
    const[color, setColor] = useState({
        state: false
    });

    useEffect(() => {
        const Handler =  (e) => {
            if(!ShareRef.current.contains(e.target)){
                setShare(false);
            }
        }
        document.addEventListener("mousedown", Handler);

        return () => document.removeEventListener("mousedown", Handler);
    },[]);

    useEffect(() => {
        const ReTweetHandler =  (e) => {
            if(!TweetRef.current.contains(e.target)){
                setRetweet(false);
            }
        }
        document.addEventListener("mousedown", ReTweetHandler);

        return () => document.removeEventListener("mousedown", ReTweetHandler);
    },[]);

    function Liked(){
            setLike((prevState) => ({
                state: !prevState.state, number:+!+prevState.number+""
            }));
            setColor((prevState) => ({
                state: !prevState.state
            }));
    }

  return (
      <>
        <div className='post'>
            <div className='post_avatar'>
                <img src={ avatar } width={36} height={36} alt='avatar' />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <MoreHorizIcon className='more_icon' onClick={() => setDeleteTweet(true)} />
                    <div className='post_headerText'>
                        <h3>{ TwitterDetials.displayname }</h3>
                        <p>{ TwitterDetials.Twitterusername }</p>
                    </div> 
                    <div className='post_headerDescription'>
                        <p>{ text }</p>
                    </div>   
                </div> 
                {/* <img src={ image } alt='post' />  */}
                <div className='post_footer' >
                    <div className='comment'>
                        <ModeCommentOutlinedIcon />
                    </div>    
                    <div className='retweet'>
                        <p>0</p>
                        <SyncIcon className='icon' onClick={(e) => setRetweet(true)} />
                    </div>  
                    <div className='like' onClick={Liked}>
                        <p>{like.number}</p>
                        <p className='icon'>{color.state ? <FavoriteIcon style={{color:"rgba(255,0,0,1)"}} /> : <FavoriteBorderIcon /> }</p>       
                    </div>     
                    <div className='share'> 
                        <ShareOutlined onClick={(e) => setShare(true)}/> 
                    </div>    
                </div>  
            </div>
        </div>
        <Share show={share} ref={ShareRef}>
            <div>
                <MailOutlineIcon />
                <p>Send Via Direct Message</p>
            </div>
            <div>
                <BookmarkBorderIcon />
                <p>Bookmark</p>
            </div>
            <div>
                <LinkIcon />
                <p>copy link to Tweet</p>
            </div>
            <div>
                <SaveAltIcon />
                <p>Share Tweet via...</p>
            </div>
        </Share>
        <Retweet show={retweet} ref={TweetRef}>
            <div>
                <MailOutlineIcon />
                <p>Retweet</p>
            </div>
            <div>
                <BookmarkBorderIcon />
                <p>Qoute Tweet</p>
            </div>
        </Retweet>
        <Delete show={DeleteTweet}>
            <div className='btn_content'>
                <h2>Delete Tweet?</h2>
                <p>This can't be undone and it will be removed from your profile, the timeline of any accounts that follows you, and from Twitter search results.</p>
            </div>
            <div className='btn_grp'>
                <button type='submit' style={{height:'5vh', borderRadius:'24px', backgroundColor:'red', color:'white', border:'none', cursor:'pointer;'}}
                >Delete</button>    
                <button type='submit' style={{height:'5vh', borderRadius:'24px', backgroundColor:'white', color:'black', marginTop:'12px', cursor:'pointer'}}
                onClick={() => setDeleteTweet(false)}>Cancel</button>    
            </div>
        </Delete>
    </>
  )
}

export default Post

const Share = styled.div`
    width:14vw;
    height:28vh;
    position:relative;
    margin-top:-32.55%;
    left:42%;
    border-radius:4px;
    box-shadow:0 3px 8px rgba(0,0,0,0.15);
    display:${props => props.show ? 'block' : 'none'};
    background-color:white;

    div{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:start;
        padding-left:8px;
        padding-top:4px;
        cursor:pointer;
        font-size:0.9em;

        p{
            padding-left:4px;
        }
    }
`
const Retweet = styled.div`
    width:10vw;
    height:14vh;
    position:relative;
    margin-top:-16.27%;
    left:12.5%;
    border-radius:4px;
    box-shadow:0 3px 8px rgba(0,0,0,0.15);
    display:${props => props.show ? 'block' : 'none'};
    background-color:white;

    div{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:start;
        padding-left:8px;
        padding-top:4px;
        cursor:pointer;
        font-size:0.9em;

        p{
            padding-left:4px;
        }
    }
`
const Delete = styled.div`
    width:24vw;
    height:36vh;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:white;
    border-radius:12px;
    box-shadow:0 3px 8px rgba(0,0,0,0.025);
    display:${props => props.show ? 'block' : 'none'};
    z-index:99999999999999999999999;

    .btn_content{
        width:94%;
        margin-left:4%;
        margin-top:6%;

        h2{
            text-align:center;
        }
    }

    .btn_grp{
        margin-left:4%;
        margin-top:6%;

        button{
            font-weight:600;
            width:94%;
            border:none;
            outline:none;
            background:none;
            border:1px solid rgba(0,0,0,0.2);
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }
    }
`