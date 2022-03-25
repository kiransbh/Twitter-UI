import React,{ useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAuth } from '../Features/User';

function Login() {

    const dispatch = useDispatch();
    const[email, setemail] = useState("");

  return (
    <LoginPage>
        <form className='login'>
            <div className='login_logo'>
                <img src='/Images/twitter.png' width={30} height={30} alt='logo' />    
            </div>
            <div className='container'>
                <h2>Sign in to Twitter</h2>
                <div className='signin_options'>
                    <button type='submit' className='google'>Sign in with Google</button>     
                    <button type='submit' className='apple'>Sign in with Apple</button>     
                </div>
                <br />
                <hr />
                <br />
                <p className='or'>or</p>
                <div className='input'>
                    <input type='email' placeholder='Phone, email or username' required onChange={(e) => setemail(e.target.value)} />    
                </div>
                <div className='signin_btn'>
                   <Link to='/Login'> <button type='submit' className='next' onClick={() => dispatch(userAuth({email:email}))}>Next</button></Link>     
                    <button type='submit' className='forget'>Forget Password?</button>     
                </div>
                <br />
                <br />
                <p className='signup'>Don't have an account? <Link to='/SignUp' style={{textDecoration:'none'}}><span>Sign Up</span></Link></p>
            </div>
        </form>
    </LoginPage>
  )
}

export default Login

const LoginPage = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:rgba(0,0,0,0.3);

    .login{
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

    .login_logo{
        position:absolute;
        top:4%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    .container{
        width:20vw;
        height:72vh;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        .signin_options{
            display:flex;
            flex-direction:column;

            button{
                width:100%;
                height:5vh;
                border:none;
                outline:none;
                background:transparent;
                border:1px solid rgba(0,0,0,0.25);
                border-radius:24px;
                font-size:1em;
            }

            .google,
            .apple{
                margin-top:20px;
            }
        }

        .or{
            font-size:1em;
            text-align:center;
            position:absolute;
            width:24px;
            height:24px;
            background-color:white;
            border-radius:50%;
            position:absolute;
            top:36.25%;
            left:50%;
            transform:translate(-50%,-50%);
        }

        .input{
            input{
                width:98%;
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

        .signin_btn{
            display:flex;
            flex-direction:column;

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
            }

            .next,
            .forget{
                margin-top:20px;
                cursor:pointer;
            }

            .next{
                color:white;
                background:black;
            }
        }

        .signup{
            span{
                color:#50b7f5;
                cursor:pointer;
            }
        }
    }
`