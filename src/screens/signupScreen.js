import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsDetails } from '../actions/newsAction'
import { Link } from 'react-router-dom'
import { signup, signin } from '../actions/userAction'


export default function SignupScreen(props) {

    const userSignup = useSelector((state) => state.userSignup)
    const { error, success, loading } = userSignup

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        //todo
        if (success) {
            dispatch(signin({ email, password }))
            props.history.push('/')
        }
    }, [success])

    const submitHandler = (e) => {
        e.preventDefault()
        //todo
        dispatch(signup({ email, password, name }))
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
                                    <div className='news-section'>
                                        <h2>Signin</h2>
                                    </div>
                                    <div className='input-block'>
                                        <label htmlFor='name'>Name</label>
                                        <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                                    </div>
                                    <div className='input-block'>
                                        <label htmlFor='email'>Email</label>
                                        <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    </div>
                                    <div className='input-block'>
                                        <label htmlFor='password'>Password</label>
                                        <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                    </div>
                                    <div className='input-block'>
                                        <label htmlFor='confirm-password'>Confirm Password</label>
                                        <input id='confirm-password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                                    </div>
                                    <div>
                                        <button className='primary' type='submit'>Signup</button>
                                    </div>
                                    <div>
                                        <p>Already have account? <Link to='/signin'>Signin</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
            }
        </>
    )
}