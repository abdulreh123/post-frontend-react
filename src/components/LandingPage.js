import React,{useState} from 'react';
import styled from 'styled-components';
import {
    loadUser
  } from "../redux/actions/loginAction";
import { useDispatch,useSelector} from 'react-redux'
import { useNavigate  } from "react-router-dom";
import Cookies from 'js-cookie';
const GRLContainer = styled.div`
    width:100%;
    background-image: url(${props => props.image});
    min-height: 100vh;
    margin-top:0px !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position:absolute;
    color:white;
    display: flex;
    align-items: center;
   justify-content: center;
`
const FormWrapper = styled.form`
    width:30rem ;
    @media (max-width: 900px) {
    width: 22rem ;
  }
`;
const Container = styled.div`
   background: rgb(44 39 39 / 15%);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(5px);
   padding: 4rem;
   -webkit-backdrop-filter: blur(5px);
   border: 1px solid rgba(255, 255, 255, 0.3);
`
const Input = styled.input`
   width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;    
  border-radius: 1rem;
`
const Button = styled.button`
   width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box; 
  border-radius: 1rem;
  background: #d5c8c8;
  cursor:pointer;
  
`
const checkLogin = () => {
    const loggedin =Cookies?.get('_AUTH')
    return loggedin? true:false;
}
const LandingPage = () => {
    const [name, setName] = useState('');
    const user = useSelector((state) => state.user.user);
     const dispatch = useDispatch();
     const navigate = useNavigate();
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        setName(value)
    }
    if (checkLogin() === true && user) {
        navigate(`/`)
      }
    return (
        <GRLContainer image={process.env.PUBLIC_URL + `/assets/images/main_bg.jpg`}>
            <Container>
                <h2> Please enter your name to join</h2>
            <FormWrapper>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                /></FormWrapper>
                <Button onClick={()=> dispatch(loadUser(name))}>Join</Button>
                </Container>
        </GRLContainer>
    );
}

export default LandingPage;