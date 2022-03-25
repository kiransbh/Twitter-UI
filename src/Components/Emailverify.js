import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Emailverify() {
  return (
    <Verify>
        <form className='verify'>
            <Link to='/SignUp'><CloseIcon className='verify_icon'/></Link>
               <div className='verify_logo'>
                   <img src='/Images/twitter.png' width={30} height={30} alt='logo' />    
               </div>
               <div className='verify_wrapper'>
                    <h1>Create your account</h1>
                    <p>Enter it below to verify kirannok1274@gmail.com.</p>
                    <div className='verify_input'>
                         <input type='text' placeholder='Verfication code' />    
                         <p>Didn't receive email?</p>
                    </div>
                    <div className='verify_btn'>
                         <Link to='/CreatePassword'><button type='submit'>Next</button></Link>
                    </div>
                </div>
        </form>
    </Verify>
  )
}

export default Emailverify

const Verify = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:rgba(0,0,0,0.3);

    .verify{
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

    .verify_icon{
        cursor:pointer;
        margin:12px;
    }

    .verify_logo{
        position:absolute;
        top:4%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    .verify_wrapper{
        width:35vw;
        height:72vh;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        .verify_input{
            input{
                width:98.5%;
                height:6vh;
                font-size:1em;
                padding-left:4px;
                border:none;
                outline:none;
                background:transparent;
                border:1px solid rgba(0,0,0,0.25);
                border-radius:6px;
                transition:0.05s all;

                :focus{
                    height:6vh;
                    padding-top:18px;
                    font-size:1.1em;
                    background:transparent;
                    border:3px solid #50b7f5;

                    ::placeholder{
                        font-size:0.8em;
                        color:#50b7f5;
                        position:absolute;
                        top:15%;
                        left:0%;
                        padding-left:4px;
                    }
                }
            }

            p{
                font-size:0.8em;
            }
        }

        .verify_btn{
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