import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/layout/Header'
import { BrowserRouter as Router  } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
const initialState = { user: 'abdul' };
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
it("remders header without any error",()=>{
    store = mockStore(initialState);
    const div = document.createElement("div")
    ReactDom.render(<Provider store={store}><Router><Header /></Router></Provider>,div)
})