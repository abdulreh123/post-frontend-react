import React from 'react';
import ReactDom from 'react-dom';
import {Main} from '../components/layout/index'
import { BrowserRouter as Router  } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react'
import thunk from 'redux-thunk'
const initialState = { user: 'abdul' };
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;
it("remders header without any error",()=>{
    store = mockStore(initialState);
    const div = document.createElement("div")
    ReactDom.render(<Provider store={store}><Router><Main></Main></Router></Provider>,div)
})
it("remders Main correctly",()=>{
    store = mockStore(initialState);
    const{getByTestId}=render(<Provider store={store}><Router><Main>this is a test</Main></Router></Provider>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('main')).toHaveTextContent("this is a test")
})