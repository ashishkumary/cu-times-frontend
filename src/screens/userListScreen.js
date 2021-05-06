import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsCollections } from '../actions/newsAction'
import HorizontalCard from '../components/horizontalCard'
import { usersList, userDelete } from '../actions/userAction'


export default function UserListScreen(props) {

    const listUsers = useSelector((state) => state.listUsers)
    const { users, loading, error } = listUsers

    const deleteUser = useSelector((state) => state.deleteUser)
    const { message, loading: loadingDelete, error: errorDelete, success } = deleteUser
    //const [success, setSuccess] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!users || success) {
            dispatch(usersList())
        }
    }, [success])

    const deleteHandler = (id) => {
        dispatch(userDelete(id))
    }

    return (
        <>
            {
                loading ? 'Loading...'
                    :
                    error ? <p>{error}</p>
                        :
                        <div className='list-container'>
                            {
                                users && users.map((item) => (
                                    // <HorizontalCard delete={setSuccess} data={item} history={props.history}></HorizontalCard>
                                    <div className='Horizontal-card-container'>
                                        {/* <Link to={`/profile/${_id}`}> */}
                                        <div>{item.name} <span>{item.isAdmin ? 'Admin' : null}</span></div>
                                        <div className='button-container'>
                                            <button className='primary' onClick={() => props.history.push(`/profile/${item._id}`)}>Edit</button>
                                            <button className='primary' type='button' onClick={() => deleteHandler(item._id)}>Delete</button>
                                        </div>
                                        {/* </Link> */}
                                        {loadingDelete && 'Loading...'}
                                        {errorDelete && <p>{errorDelete}</p>}
                                    </div>
                                ))
                            }
                        </div>
            }
        </>
    )
}