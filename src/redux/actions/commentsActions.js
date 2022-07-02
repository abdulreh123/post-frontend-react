import axios from 'axios';
//import Cookies from 'js-cookie';


export const getPostsComments = (postId,limit) => dispatch => {
    axios.get(`/posts/comments/${postId}/${limit}`,  )
        .then(api => {
            dispatch({
                type: "GET_COMMENTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const getSubComments = (commentId,limit) => dispatch => {
    axios.get(`/comments/sub-comments/${commentId}/${limit}`,  )
        .then(api => {
            dispatch({
                type: "GET_SUBCOMMENTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const addcomment = (data) => dispatch => {
    axios.post(`/comments`, data )
        .then(api => {
            dispatch({
                type: "ADD_COMMENTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const editcomment = (data,id) => dispatch => {
    axios.put(`/comments/${id}`, data )
        .then(api => {
            dispatch({
                type: "ADD_COMMENTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const deletecomment = (id) => dispatch => {
    axios.delete(`/comments/${id}`, )
        .then(api => {
            dispatch({
                type: "ADD_COMMENTS",
                payload: {
                    id:id
                }
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const addsubcomment = (data) => dispatch => {
    axios.post(`/sub_comments`, data )
        .then(api => {
            dispatch({
                type: "ADD_SUBCOMMENTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const deletesubcomment = (id) => dispatch => {
    axios.delete(`/sub_comments/${id}`, )
        .then(api => {
            dispatch({
                type: "ADD_SUBCOMMENTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}
export const editSubcomment = (data,id) => dispatch => {
    axios.put(`/sub_comments/${id}`, data )
        .then(api => {
            dispatch({
                type: "ADD_SUBCOMMENTS",
                payload: api.data
            });
        })
       .catch(error => {
           console.log(error)
        })
}