import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function ProfilePicture() {
  return (
    <ProfilePic>
        <form className='profile_picture'>
            <div className='profile_picture_logo'>
                <img src='/Images/twitter.png' width={30} height={30} alt='logo' />    
            </div>
            <div className='profile_picture_wrapper'>
                <h1>Pick a profile picture</h1>
                <p>Have a favorite selfie? Upload it now.</p>
                <div className='profile_picture_input'>
                    <input type='file' alt='image' />
                    <AccountCircleIcon className='profile_picture_icon' />
                </div>
                <div className='profile_picture_btn'>
                     <Link to='/Home'><button type='submit'>Upload</button></Link>
                </div>
            </div>
        </form>
    </ProfilePic>
  )
}

export default ProfilePicture

const ProfilePic = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:rgba(0,0,0,0.3);

    .profile_picture{
        width:39vw;
        height:86vh;
        background-color:white;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        border-radius:24px;
        box-shadow:0 3px 8px rgba(0,0,0,0.1);
    }

    .profile_picture_icon{
        cursor:pointer;
        margin:12px;
    }

    .profile_picture_logo{
        position:absolute;
        top:4%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    .profile_picture_wrapper{
        width:35vw;
        height:72vh;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        .profile_picture_input{
            width:15vw;
            height:30vh;
            border-radius:50%;
            border:1px solid rgba(0,0,0,0.36);
            position:relative;
            top:30%;
            left:50%;
            transform:translate(-50%,-50%);

            .profile_picture_icon{
                font-size:14em;
                position:relative;
                top:-62%;
                left:45%;
                transform:translate(-50%,-50%);
                z-index:-1;
                border-radius:50%;
            }

            input{
                width:16vw;
                height:32vh;
                border-radius:50%;
                opacity:0;
                cursor:pointer;
                margin-top:-10%;
                margin-left:-2%;
            }
        }

        .profile_picture_btn{
            button{
                width:100%;
                height:5vh;
                border:none;
                outline:none;
                background:transparent;
                border:1px solid rgba(0,0,0,0.25);
                border-radius:24px;
                font-size:0.9em;
                font-weight:600;
                color:white;
                background:black;
                position:absolute;
                top:100%;
                left:50%;
                transform:translate(-50%,-50%);
                cursor:pointer;
            }
        }
`