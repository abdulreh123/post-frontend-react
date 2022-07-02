import axios from 'axios';
//import Cookies from 'js-cookie';


export const getPosts = (page) => dispatch => {
    axios.get(`/get-posts/${page}`,  )
        .then(api => {
            dispatch({
                type: "GET_POSTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const getPost = (id) => dispatch => {
    axios.get(`/get-single-posts/${id}`,  )
        .then(api => {
            dispatch({
                type: "ADD_POSTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const emptyPost = () => dispatch => {
            dispatch({
                type: "EMPTY_POSTS",
            });
}
export const addPosts = (data) => dispatch => {
    axios.post(`/posts`, data )
        .then(api => {
            dispatch({
                type: "ADD_POSTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const editPosts = (data,id) => dispatch => {
    axios.put(`/posts/${id}`, data )
        .then(api => {
            dispatch({
                type: "ADD_POSTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const deletePosts = (id) => dispatch => {
    axios.delete(`/posts/${id}`)
        .then(api => {
            dispatch({
                type: "ADD_POSTS",
                payload: {
                    id:id
                }
            });
        })
       .catch(error => {
           console.log(error)
        })
}
