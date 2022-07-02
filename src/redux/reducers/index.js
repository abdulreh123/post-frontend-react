import {combineReducers} from 'redux';
import loginReducer from './LoginReducer';
import PostsReducer from './postReducers';
import CommentReducer from './commentReducers';


export default combineReducers({
    user: loginReducer,
    posts:PostsReducer,
    comments:CommentReducer

});