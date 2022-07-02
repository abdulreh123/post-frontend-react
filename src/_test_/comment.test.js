import React from 'react';
import ReactDom from 'react-dom';
import Comments from '../components/comments/Comments'
import { BrowserRouter as Router  } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
const initialState = { user: 'abdul',
posts:{},
comments:{} };
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
it("remders comments without any error",()=>{
    const test ={
        id:1,
        content:"hello",
        user:"test user",
        post_id:1
    }
    store = mockStore(initialState);
    const div = document.createElement("div")
    ReactDom.render(<Provider store={store}><Router><Comments data={test} /></Router></Provider>,div)
})