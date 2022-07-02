import React from 'react';
import styled from 'styled-components';
import Header from './Header'
const GRLContainer = styled.div`
min-height: 100vh;
color:black;
background: #f3f4f6;
display: flex;
flex-direction: column;
`
export const Main = (props) => {

    return (
        <>
        <GRLContainer data-testid="main">
            <Header/>
            {props.children}
         </GRLContainer>
        </>
        
    )
}