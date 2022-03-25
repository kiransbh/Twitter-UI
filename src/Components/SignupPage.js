import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <CreateAccount>
        <form className='create'>
            <Link to='/'><CloseIcon className='Close'/></Link>
               <div className='close_logo'>
                   <img src='/Images/twitter.png' width={30} height={30} alt='logo' />    
               </div>
               <div className='create_wrapper'>
                    <h1>Create your account</h1>
                    <div className='create_input'>
                         <input type='text' placeholder='Name' />    
                         <input type='text' placeholder='Email' className='email' />    
                    </div>
                    <div className='create_btn'>
                         <Link to='/Emailverify'><button type='submit'>Next</button></Link>
                    </div>
                    <br />
                    <br />
                    <div className='dob'>
                        <p>By signing up, you agree to the <span>Terms of service</span> and <span>Privacy Policy</span>, including <span>Cookie Use.</span> Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personailizing services, including ads. <span>Learn more.</span> Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.</p>
                    </div>
               </div>
        </form>
    </CreateAccount>
  )
}

export default SignupPage

const CreateAccount = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:rgba(0,0,0,0.3);

    .create{
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

    .Close{
        cursor:pointer;
        margin:12px;
    }

    .close_logo{
        position:absolute;
        top:4%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    .create_wrapper{
        width:35vw;
        height:72vh;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        .create_input{
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

            .email{
                margin-top:24px;
            }
        }

        .create_btn{
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

        .dob{
            position:relative;
            margin-top:25%;

            span{
                color:#50b7f5;
            }
        }
    }
`