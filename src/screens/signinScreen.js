import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsDetails } from '../actions/newsAction'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userAction'



export default function SigninScreen(props) {

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo, error, loading } = userSignin

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (userInfo) {
            props.history.push('/')
        }
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        //todo
        dispatch(signin({ email, password }))
    }

    return (
        <>
            {
                loading ? 'Loading...'
                    :
                    error ? <p>{error}</p>
                        :
                        <div className='signin-container'>
                            <div className='inner-container'>
                                <form onSubmit={submitHandler}>
                                    <div className='heading-section'>
                                        <h2>Signin</h2>
                                    </div>
                                    <div className='input-block'>
                                        <label htmlFor='email'>Email</label>
                                        <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                    <div className='input-block'>
                                        <label htmlFor='password'>Password</label>
                                        <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <button className='primary' type='submit'>Login</button>
                                    </div>
                                    <div>
                                        <p>Create accout <Link to='/signup'>Signup</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
            }
        </>
    )
}