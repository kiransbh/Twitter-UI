import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Signup() {

    const Email = useSelector((state) => state.user.value);

  return (
    <SignupPage>
        <form className='signup'>
        <Link to='/' style={{textDecoration:'none', color:'black'}}><CloseIcon className='Close'/></Link>
            <div className='signup_logo'>
                <img src='/Images/twitter.png' width={30} height={30} alt='logo' />    
            </div>
            <div className='signup_wrapper'>
                <h2>Enter your password</h2>
                <div className='signup_email'>
                    <input type='email' placeholder='email' disabled value={ Email.email } /> 
                </div>
                <br />
                <div className='signup_input'>
                    <input type='password' placeholder='password' />    
                </div>
                <p className='signup_forget'>Forget password?</p>
                <div className='login_btn'>
                   <Link to='/Home'> <button type='submit'>Log in</button></Link>
                </div>
                <p className='signup_account'>Don't have an account? <Link to='/SignUp' style={{textDecoration:'none'}}><span>Sign Up</span></Link></p>
            </div>
        </form>
    </SignupPage>
  )
}

export default Signup

const SignupPage = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:rgba(0,0,0,0.3);

    .signup{
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
        margin:12px;
        cursor:pointer;
    }

    .signup_logo{
        position:absolute;
        top:4%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    .signup_wrapper{
        width:36vw;
        height:72vh;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        .signup_email{
            opacity:0.6;
        }

        .signup_input,
        .signup_email{
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
        }

        .signup_forget{
            color:#50b7f5;
            cursor:pointer;
        }

        .login_btn{
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
                top:84%;
                left:50%;
                transform:translate(-50%,-50%);
                cursor:pointer;
            }
        }

        .signup_account{
            position:absolute;
            top:96%;
            left:20%;
            transform:translate(-50%,-50%);

            span{
                color:#50b7f5;
                cursor:pointer;
            }
        }
    }
`

