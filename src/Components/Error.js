import React from 'react';
import styled from 'styled-components';

function Errors() {
  return (
    <Error>
        <h1>404 -- Page Not Found.</h1>
    </Error>
  )
}

export default Errors

const Error = styled.div`
    position:absolute;
    top:50%;
    left:55%;
    transform:translate(-50%,-50%);

    h1{
        font-size:4.8em;
    }
`