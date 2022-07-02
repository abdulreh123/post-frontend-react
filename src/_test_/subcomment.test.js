import React from 'react';
import ReactDom from 'react-dom';
import Subcomments from '../components/comments/Subcomments'
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
it("remders subcomments without any error",()=>{
    const test ={
        id:1,
    }
    store = mockStore(initialState);
    const div = document.createElement("div")
    ReactDom.render(<Provider store={store}><Router><Subcomments id={test.id} /></Router></Provider>,div)
})