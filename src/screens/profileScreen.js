import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsDetails } from '../actions/newsAction'
import { Link } from 'react-router-dom'
import { signin, userDetails, profileEdit, adminProfileEdit } from '../actions/userAction'
import { USER_EDIT_RESET, ADMIN_USER_EDIT_RESET } from '../constants/userConstant'



export default function ProfileScreen(props) {
    const productId = props.match.params.id

    const detailsUser = useSelector((state) => state.detailsUser)
    const { user, loading, error } = detailsUser

    const adminUserEdit = useSelector((state) => state.adminUserEdit)
    const { success, error: errorUserEdit, loading: loadingUserEditr } = adminUserEdit

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!user || (productId !== user._id) || success) {
            dispatch({ type: ADMIN_USER_EDIT_RESET })
            dispatch(userDetails(productId))
        } else {
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
        }

    }, [user, loading, productId, success])

    const submitHandler = (e) => {
        e.preventDefault()
        //todo
        dispatch(adminProfileEdit(productId, { isAdmin, name, email }))
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
                                        <h2>User Profile</h2>
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
                                        <input id='isadmin' type='checkbox' checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)}></input>
                                        <label htmlFor='isadmin'>Admin</label>
                                    </div>
                                    <div>
                                        <button className='primary' type='submit'>Submit</button>
                                    </div>
                                    {loadingUserEditr && 'Loading...'}
                                    {errorUserEdit && <p>{errorUserEdit}</p>}
                                </form>
                            </div>
                        </div >
            }
        </>
    )
}