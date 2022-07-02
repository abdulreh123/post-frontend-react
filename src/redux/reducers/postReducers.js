const initialState = {
    posts: {},
    post: {},
  }
  


  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action) => {
    switch (action.type) {
      case "GET_POSTS":
        return {
          ...state,
          posts: action.payload
        }
      case "ADD_POSTS":
        return {
          ...state,
          post: action.payload
        }
      case "EMPTY_POSTS":
        return {
          ...state,
          post: {}
        }
      default:
        return state;
    }
  }