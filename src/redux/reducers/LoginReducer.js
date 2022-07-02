import Cookies from 'js-cookie'

const initialState = {
    user: null,
  }
  


  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action) => {
    switch (action.type) {
      case "USER_LOADED":
        Cookies.set('_AUTH', `${JSON.stringify({user:action.payload})}`)
        return {
          ...state,
          user: action.payload
        }
      case "USER_RELOADED":
        const cookie =Cookies?.get('_AUTH')
        const user =JSON.parse(cookie)
          return {
            ...state,
            user: user.user
         }
      case "USER_UNLOADED":
        Cookies.remove('_AUTH')
        return {
          ...state,
          user: null
        }
      default:
        return state;
    }
  }