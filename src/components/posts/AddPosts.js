import React,{useState} from 'react';
import styled from 'styled-components';
import {
  addPosts
} from "../../redux/actions/postsActions";
import {useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
const Container = styled.div`
  display: flex;
  // grid-template-columns: 1fr auto;
  justify-content: center;
  margin-left: 480px;
  margin-right: 480px;
  
  @media (max-width: 1250px) {
    // grid-template-columns: 1fr auto;
    margin-left: 140px;
    margin-right: 140px;
}
@media (max-width: 750px) {
    // grid-template-columns: 1fr auto;
    margin-left: 40px;
    margin-right: 40px;
}
    }
`
const Card = styled.div`
  display: flex;
flex-direction: column;
  background: rgba(255,255,255,0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
`
const CardBody = styled.form`
 padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
const CardFotter = styled.div`
  display: flex;
 padding: 1rem;
  justify-content: flex-start;
  gap: .5rem;
`
const Info = styled.div`
display: flex;
gap:1rem;
`
const Button = styled.button`
display: flex;
justify-content: center;
width:auto;
font-size: .8rem;
text-transform: uppercase;
text-decoration: none;
font-weight: 800;
border-radius: 2rem;
padding: 1rem 1rem;
border: none;
outline: none;
color: #fff;
cursor: pointer;
background: #d5c8c8;

`
const Input = styled.input`
   width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: flex;
  border: 1px solid #ccc;
  box-sizing: border-box;    
  border-radius: 1rem;
`

export const TextAreaFloat = styled.textarea`
  border-radius: 10px;
  display: flex;
  // padding:${props=>props.padding||"1rem"};
  border: solid 1px lightgray;
  font-size: 1rem;
  resize: none;
  line-height: 25px;
  text-shadow: none;
  // margin:0 !important;
  color: var(--secondary-text-color);
  flex: 1 1 auto;
  order: 2;
  &:focus {
    outline: 0;
  }
`;
const AddPosts = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setData({
        ...data,
        [name]: value,
        "user":user
    })
}
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPosts({ ...data }));
    navigate(`/`)
    document.getElementById("reset").reset()
}
    return (
        <Container>
            <Card>
                <CardBody id ="reset">
                    TITLE
                    <Input type="text" name="title" onChange={handleChange}/>
                    CONTENT
                    <TextAreaFloat type="text" name="content" onChange={handleChange}/>
                </CardBody>
                <CardFotter>
                    <Info>
                       <Button onClick={handleSubmit}>Add post</Button>
                    </Info>
                </CardFotter>
            </Card>
        </Container>
    );
}

export default AddPosts;