import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsCollections } from '../actions/newsAction'
import { Link } from 'react-router-dom'
import { userDelete } from '../actions/userAction'


export default function HorizontalCard(props) {

    const [deleted, setDeleted] = useState(false)

    const deleteUser = useSelector((state) => state.deleteUser)
    const { message, loading, success } = deleteUser


    const { name, isAdmin, _id } = props.data
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('success', success)
        if (success) {
            props.delete(true)
        }

    }, [success])

    const deleteHandler = (id) => {
        dispatch(userDelete(id))
        setDeleted(true)
    }

    return (
        <div className='Horizontal-card-container'>
            {/* <Link to={`/profile/${_id}`}> */}
            <div>{name} <span>{isAdmin ? 'Admin' : null}</span></div>
            <div>
                <button onClick={() => props.history.push(`/profile/${_id}`)}>Edit</button>
                <button type='button' onClick={() => deleteHandler(_id)}>Delete</button>
            </div>
            {/* </Link> */}
        </div>
    )
}