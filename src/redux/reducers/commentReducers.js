const initialState = {
    comments: {},
    comment: {},
    subcomments:{},
    subcomment:{}
  }
  


  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action) => {
    switch (action.type) {
      case "GET_COMMENTS":
        return {
          ...state,
          comments: action.payload
        }
      case "GET_SUBCOMMENTS":
        return {
          ...state,
          subcomments: action.payload
        }
      case "ADD_COMMENTS":
        return {
          ...state,
          comment: action.payload
        }
      case "ADD_SUBCOMMENTS":
        return {
          ...state,
          subcomment: action.payload
        }
      default:
        return state;
    }
  }