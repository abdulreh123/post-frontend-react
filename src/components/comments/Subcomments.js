import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import {deletesubcomment,editSubcomment
  } from "../../redux/actions/commentsActions";
const Subcomments = styled.div`
     width: 100%;
  padding: 12px 20px;
  // margin: 0rem 4rem;
  display: grid;
  grid-template-rows: 50% 50% 
  border: 1px solid #ccc;
  box-sizing: border-box; 
  border-radius: 1rem;
  background: #e5e5e5;
  margin: 1rem;

`
const SubcommentsConrainer = styled.div`
padding: 0rem 3rem 0rem;

`
const More = styled.div`
cursor:pointer

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
const AllSubComments = (props) => {
    const subcomment = useSelector((state) => state.comments.subcomment);
    const [limit, setLimit] = useState(0)
    const [data,setData] = useState({})
    const [editData,setEditData] = useState({})
    const [edit, setEdit] = useState(false)
    const dispatch =useDispatch()
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setEditData({
            ...data,
            [name]: value,
        })
    }
    const editSubmit = (id) => {
        // e.preventDefault();
        dispatch(editSubcomment({ ...editData },id));
        setEdit(false)
        document.getElementById("reseteditsubComments").reset()
    }
    useEffect(() => {
        axios.get(`/comments/sub-comments/${props.id}/${limit}`,  )
        .then(api => {
            setData(api.data)
        })
       .catch(error => {
           console.log(error)
        })
      }, [limit,props.id,subcomment]);
    return (
        <SubcommentsConrainer>
        {data?.data?.map(subcomment=>
        <Subcomments key={subcomment.id}>
        <div><strong>{subcomment.user}:</strong></div> 
          <div>{subcomment.content}</div>  
          <Reply>
                  <ReplyButton onClick={()=> {setEdit(!edit)}}>edit</ReplyButton>
                  <ReplyButton onClick={()=> dispatch(deletesubcomment(subcomment.id))}>delete</ReplyButton>
                  </Reply>
          {edit?
            <Submit id = 'reseteditsubComments'>
            <Comment  type="text" placeholder='comment'defaultValue={subcomment.content} name='content' onChange={handleChange} />
            <Button onClick={()=>editSubmit(subcomment.id)}>Edit</Button>
            </Submit>:null}
        </Subcomments>
            )}
        {data?.loadMore?
        <More onClick={()=>setLimit(limit+2)}>view more replies</More>:null}
        {data?.loadMore===false && limit>=2? 
        <More onClick={()=>setLimit(0)}>view less replies</More>:null}
        </SubcommentsConrainer>
              
    );
}

export default AllSubComments;