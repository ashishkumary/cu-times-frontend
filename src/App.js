import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import HomeScreen from './screens/homeScreen';
import NewsScreen from './screens/newsScreen';
import EditorContainer, { AddNewsScreen } from './screens/addNewsScreen';
import SigninScreen from './screens/signinScreen';
import SignupScreen from './screens/signupScreen';
import { useDispatch, useSelector } from 'react-redux'
import { signout } from './actions/userAction';
import AdminRoute from './components/adminRoute';
import PrivateRoute from './components/privateRoute'
import FavourateScreen from './screens/favourateScreen';
import UserListScreen from './screens/userListScreen';
import ProfileScreen from './screens/profileScreen';
import NewsListScreen from './screens/newsListScreen';
import LinkScreen from './screens/linkScreen';

function App() {

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin

    const { pathname } = window.location
    const linkName = pathname.substring(1)

    useEffect(() => {

    }, [pathname])

    const dispatch = useDispatch()

    const signoutHandler = () => {
        //todo
        dispatch(signout())
    }

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header row">
                    <div className='logo-section col-1'>
                        <Link to='/'><img width='100px' className='logo' src='https://cutime.s3.amazonaws.com/chandigarh-university-seal.png'></img></Link>
                    </div>
                    <div className='home-link-section col-3'>
                        <ul className='home-link-list'>
                            <li><Link className='link' to='/academics'>Academics</Link></li>
                            <li><Link className='link' to='/sports'>Sports</Link></li>
                            <li><Link className='link' to='/culture'>Culture</Link></li>
                            <li><Link className='link' to='/events'>Events</Link></li>
                            {userInfo && userInfo.name ?
                                <div className='dropdown'>
                                    <Link className='link' to='#'>{userInfo.name}</Link>
                                    <ul className='dropdown-content'>
                                        <li><Link to='#' onClick={signoutHandler}>Sign Out</Link></li>
                                        <li><Link to='/userprofile'>Profile</Link></li>
                                        <li><Link to={`/favourate`}>Favourates({userInfo && userInfo.favourites.length})</Link></li>
                                    </ul>
                                </div>
                                :
                                <Link className='link' to='/signin'>Signin/Signup</Link>
                            }
                            {userInfo && userInfo.isAdmin ?
                                <div className='dropdown'>
                                    <Link className='link' to='#'>Admin</Link>
                                    <ul className='dropdown-content'>
                                        <li><Link to='/addnews'>Add News</Link></li>
                                        <li><Link to='/users'>Users</Link></li>
                                        <li><Link to='/newslist'>News List</Link></li>
                                    </ul>
                                </div>
                                :
                                null
                            }
                        </ul>
                    </div>
                </header>
            </div>

            <Route path='/' exact component={HomeScreen}></Route>
            <Route path='/news/:id' component={NewsScreen}></Route>
            {/* <Route path='/addnews' component={EditorContainer}></Route> */}
            <Route path='/signin' component={SigninScreen}></Route>
            <Route path='/signup' component={SignupScreen}></Route>
            <Route path='/academics' component={LinkScreen}></Route>
            <Route path='/sports' component={LinkScreen}></Route>
            <Route path='/culture' component={LinkScreen}></Route>
            <Route path='/events' component={LinkScreen}></Route>
            <PrivateRoute path='/favourate' component={FavourateScreen}></PrivateRoute>
            <AdminRoute path='/addnews' component={EditorContainer}></AdminRoute>
            <AdminRoute path='/users' component={UserListScreen}></AdminRoute>
            <AdminRoute path='/newslist' component={NewsListScreen}></AdminRoute>
            <AdminRoute path='/profile/:id' component={ProfileScreen}></AdminRoute>

        </BrowserRouter>
    );
}

export default App;
