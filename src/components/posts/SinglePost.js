import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AllComments from '../comments/Comments';
import { Link,useNavigate } from "react-router-dom";
import {
  getPost, emptyPost,deletePosts
} from "../../redux/actions/postsActions";
import {
  getPostsComments, addcomment
} from "../../redux/actions/commentsActions";
import { useDispatch, useSelector } from 'react-redux'
const Container = styled.div`
    display: grid;
    margin-left: 80px;
    margin-right: 80px;
    grid-template-columns: 1fr auto;
    @media (max-width: 1250px) {
        grid-template-columns: 1fr auto;
        margin-left: 40px;
        margin-right: 40px;
    }
    @media (max-width: 750px) {
        grid-template-columns: 1fr auto;
        margin-left: 40px;
        margin-right: 40px;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.2);
    border-top-radius: 16px;
    padding: 1rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`
const CardBody = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const CardFotter = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const Info = styled.div`
    display: flex;
    gap: 1rem;
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
`
const Action = styled.div`
display: flex;
gap: .5rem;
padding: 0rem 0rem 1rem;
`
const Actions = styled.small`
cursor:poiner
`
const ViewMore = styled.div`
   margin-bottom:1rem;
   cursor: pointer;
`
const SinglePosts = () => {
  const [limit, setLimit] = useState(2)
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const post = useSelector((state) => state.posts.post);
  const comments = useSelector((state) => state.comments.comments);
  const comment = useSelector((state) => state.comments.comment);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const id = parseInt(window.location.pathname.slice(14))
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value,
      "user": user,
      "post_id": id
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addcomment({ ...data }));
    document.getElementById("resetComment").reset()
  }
  const deletePost = (id) => {
    dispatch(deletePosts(id))
    navigate(`/`)
  }
  useEffect(() => {
    dispatch(getPost(id))
    return () => {
      dispatch(emptyPost())
    }
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(getPostsComments(id, limit))
  }, [dispatch, limit, id, comment]);
  return (
    <Container>
      <Card>
        <CardBody>
          <h4>{post?.data?.title}</h4>
          <p>{post?.data?.content}</p>
        </CardBody>
        <CardFotter>
          <Info>
            <div >
              <h5>{post?.data?.user}</h5>
              <Action>
              <small>{post?.data?.created_at.slice(0, 10)}</small>
                <Actions><Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/edit-posts/${post?.data?.id}`}
                >
                  Edit
                </Link></Actions>
                <Actions onClick={() => deletePost(post.data?.id)}>Delete</Actions>
              </Action>
            </div>
          </Info>
          <hr></hr>
          {comments?.data?.map((comment, index) =>
            <AllComments key={index} data={comment} />
          )}
          {comments?.loadMore ?
            <ViewMore onClick={() => setLimit(limit + 2)}>view more comments</ViewMore> : null}
          <Submit id='resetComment'>
            <Comment type="text" placeholder='comment' name='content' onChange={handleChange} />
            <Button onClick={handleSubmit}>Comment</Button>
          </Submit>
        </CardFotter>
      </Card>
    </Container>
  );
}

export default SinglePosts;