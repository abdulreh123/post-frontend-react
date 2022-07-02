import React,{useState} from 'react';
import styled from 'styled-components';
import AllSubComments from './Subcomments';
import {useDispatch, useSelector } from 'react-redux'
import {
    addsubcomment,editcomment,deletecomment,
  } from "../../redux/actions/commentsActions";
const Comments = styled.div`
     width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: grid;
  grid-template-rows: 50% 50% 
  border: 1px solid #ccc;
  box-sizing: border-box; 
  border-radius: 1rem;
  background: #e5e5e5;

`
const CommentsContainer = styled.div`
      //  padding: 1rem 28rem 1rem 2rem;

`
const Comment = styled.input`
    width: 99%;
    width: 99%;
    height: 2.5rem;
    border-radius: 1rem;
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
const Submit = styled.form`
gap: .5rem;
display: flex;
padding: 1rem;
`
const Reply = styled.div`
gap: .5rem;
display: flex;
padding: 1rem;
`
const ReplyButton = styled.div`
cursor:pointer
`

const AllComments = (props) => {
    const [reply, setReply] = useState(false)
    const [edit, setEdit] = useState(false)
    const user = useSelector((state) => state.user.user);
    const [data,setData] = useState({})
    const [editData,setEditData] = useState({})
    const dispatch= useDispatch()
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value,
            "user":user,
            "comment_id":props?.data?.id
        })
    }
    const handleEdit = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setEditData({
            ...data,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addsubcomment({ ...data }));
        setReply(!reply)
        document.getElementById("resetsubComment").reset()
    }
    const editSubmit = (e) => {
        e.preventDefault();
        dispatch(editcomment({ ...editData },props?.data?.id));
        setEdit(false)
        document.getElementById("reseteditsubComment").reset()
    }
    return (
        <CommentsContainer key={props?.data?.id}>
                <Comments>
                <div><strong>{props?.data?.user}:</strong></div> 
                  <div>{props?.data?.content}</div>
                  <Reply>
                  <ReplyButton onClick={()=> {setReply(!reply);setEdit(false)}}>reply</ReplyButton>
                  <ReplyButton onClick={()=> {setEdit(!edit);setReply(false)}}>edit</ReplyButton>
                  <ReplyButton onClick={()=> dispatch(deletecomment(props?.data?.id))}>delete</ReplyButton>
                  </Reply>
                </Comments>
                <AllSubComments id={props?.data?.id} />
                {reply?
               <Submit id = 'resetsubComment'>
               <Comment  type="text" placeholder='comment' name='content' onChange={handleChange}/>
               <Button onClick={handleSubmit}>Comment</Button>
               </Submit>:null}
                {edit?
               <Submit id = 'reseteditsubComment'>
               <Comment  type="text" placeholder='comment' name='content' defaultValue={props?.data?.content} onChange={handleEdit}/>
               <Button onClick={editSubmit}>Edit</Button>
               </Submit>:null}
                </CommentsContainer>
              
    );
}

export default AllComments;