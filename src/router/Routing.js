import React  from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Cookies from 'js-cookie';
import LandingPage from '../components/LandingPage';
import Posts from '../components/posts/AllPost';
import SinglePosts from '../components/posts/SinglePost';
import AddPosts from '../components/posts/AddPosts';
import EditPosts from '../components/posts/EditPotsts';
import {Main as MainTheme} from '../components/layout/index';


const checkLogin = () => {
    const loggedin =Cookies?.get('_AUTH')
    return loggedin? true:false;
}

const PrivateRoute = ({ component: Component,layout:Layout, ...rest }) =>  {
    const isLogged = checkLogin()
    return isLogged ?<Layout><Component/></Layout>  : <Navigate to="/login" />;
}
const PublicRoute = ({ component: Component, ...rest }) =>  {
    const isLogged = checkLogin()
    return isLogged ?<Navigate to="/" /> : <Component />;
}

const Routing = () => {
    return (
        <Router>
            <Routes>
            <Route exact path='/login'  element={<PublicRoute component={LandingPage} />}/>
            <Route exact path='/'  element={<PrivateRoute component={Posts} layout={MainTheme} />}/>
            <Route exact path='/single-posts/:id'  element={<PrivateRoute component={SinglePosts} layout={MainTheme} />}/>
            <Route exact path='/edit-posts/:id'  element={<PrivateRoute component={EditPosts} layout={MainTheme} />}/>
            <Route exact path='/add-posts'  element={<PrivateRoute component={AddPosts} layout={MainTheme} />}/>
            </Routes>
        </Router>
    );
}

export default Routing;