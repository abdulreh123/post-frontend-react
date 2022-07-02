import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
  getPosts
} from "../../redux/actions/postsActions";
import { useDispatch, useSelector } from 'react-redux'
const Container = styled.div`
  display: grid;
  margin-left: 80px;
  margin-right: 80px;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: auto;
  gap: 2rem;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2,1fr);
    margin-left: 40px;
    margin-right: 40px;
    }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1,1fr);
    margin-left: 40px;
    margin-right: 40px;
    }
`
const Card = styled.div`
  display: flex;
  min-height: 100%;
  width: auto;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  &:hover {
    background: #ccd2d4;
  }
`
const CardBody = styled.div`
 padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
const CardFotter = styled.div`
 padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
const Info = styled.div`
display: flex;
gap:1rem;
`
const Pagination = styled.div`
display: flex;
gap:1rem;
padding: 3rem;
`
const Nav = styled.div`
cursor:pointer
`

const Posts = () => {
  const [page, setPage] = useState(1)
  const posts = useSelector((state) => state.posts.posts);
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(page))
  }, [dispatch, post,page]);
  return (
    <>
    <Container>
      {posts?.data?.map((post, index) => 
      <Card>
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/single-posts/${post.id}`} key={index}>
         
            <CardBody>
              <h4>{post.title}</h4>
              <p>{post.content.slice(0,100)}...</p>
            </CardBody>
            <CardFotter>
              <Info>
                <div >
                  <h5>{post.user}</h5>
                  <small>{post?.created_at?.slice(0,10)}</small>
                </div>
              </Info>
            </CardFotter>
        </Link>
          </Card>
      )}
    </Container>
     <Pagination>
     {posts?.prePage? <Nav onClick={()=> setPage(page-1)}>Previous</Nav>:null}
     {page} of {posts?.pageCount}
     {posts?.nextPage? <Nav onClick={()=> setPage(page+1)}>Next</Nav>:null}
   </Pagination>
   </>
  );
}

export default Posts;