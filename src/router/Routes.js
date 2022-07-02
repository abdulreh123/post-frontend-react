
// import DefaultTheme from '../themes/defaultTheme'

import LandingPage from '../components/LandingPage';
import Posts from '../components/posts/AllPost';
import {Main as MainTheme} from '../components/layout/index';

export const publicRoutes = [
    {
        path: '/login',
        name: 'landing page',
        element: LandingPage,
        exact: true,
    },
]


export const appRoutes = [
    {
        path: '/',
        name: 'Posts',
        element: Posts,
        exact: true,
        restricted: true,
        layout: MainTheme
    },
]

//export default DefaultThemeRoutes;



