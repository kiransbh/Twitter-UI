import React,{ useState } from 'react'
import styled from 'styled-components'

function Profile() {

    const[follow, setFollow] = useState({
        state: false
    });

    function following(){
        setFollow((prevState) => ({
            state: !prevState.state
        }));
}
  return (
      <>
    <Profiles>
        <div className='left'>
            <div className='img'></div>
            <div className='name'>
                <h3>Kiran</h3>
                <p>@Kiran0777</p>    
            </div>    
        </div>
        <div className='follow' onClick={following}>
            {
                follow.state ? <button type='submit' className='followingBtn' >Following</button> : <button type='submit' className='followBtn'>Follow</button>
            }    
        </div>
    </Profiles>
    </>
  )
}

export default Profile

const Profiles = styled.div`
    width:96%;
    height:12vh;
    position:relative;
    margin-left:1vh;
    border-bottom:1px solid rgba(0,0,0,0.1);

    .img{
        width:66px;
        height:66px;
        border-radius:50%;
        position:absolute;
        top:12%;
        background-color:black;
    }

    .name{
        position:absolute;
        top:2%;
        left:22%;

        p{
            margin-top:-15%;
        }
    }
    .follow{
        .followingBtn{
            font-size:1.2em;
            color:black;
            width:120px;
            height:40px;
            position:absolute;
            top:50%;
            left:83%;
            transform:translate(-50%,-50%);
            border:none;
            outline:none;
            border-radius:24px;
            background-color:transparent;
            border:2px solid black;
            cursor:pointer;
            transition:0.5s all;
        }

        .followBtn{
            font-size:1.2em;
            color:white;
            width:94px;
            height:40px;
            position:absolute;
            top:50%;
            left:86%;
            transform:translate(-50%,-50%);
            border:none;
            outline:none;
            border-radius:24px;
            background-color:black;
            cursor:pointer;
            transition:0.5s all;
        }
    }
`