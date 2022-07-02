import React from 'react';
import ReactDom from 'react-dom';
import Posts from '../components/posts/AllPost'
import AddPosts from '../components/posts/AddPosts'
import SinglePosts from '../components/posts/SinglePost'
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
it("remders posts without any error",()=>{
    store = mockStore(initialState);
    const div = document.createElement("div")
    ReactDom.render(<Provider store={store}><Router><Posts /></Router></Provider>,div)
})
it("remders Add post page without any error",()=>{
    store = mockStore(initialState);
    const div = document.createElement("div")
    ReactDom.render(<Provider store={store}><Router><AddPosts /></Router></Provider>,div)
})
it("remders single post page without any error",()=>{
    store = mockStore(initialState);
    const div = document.createElement("div")
    ReactDom.render(<Provider store={store}><Router><SinglePosts /></Router></Provider>,div)
})