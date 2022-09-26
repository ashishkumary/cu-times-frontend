import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileEdit } from '../actions/userAction'

export default function Card(props) {

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo = {} } = userSignin || {}
    const { favourites = [], _id: userId } = userInfo || []

    const editProfile = ((state) => state.editProfile)
    console.log('editProfile', editProfile)

    const { heading, description, image, author, _id, newsDescription = '', newsId, newsImage = '', newsheading = '' } = props.data
    const { mode } = props

    useEffect(() => {

    }, [favourites])

    const dispatch = useDispatch()

    const clickHandler = () => {
        if (mode && mode === 'fav') {
            props.history && props.history.push(`/news/${newsId}`)
        } else {
            props.history.push(`/news/${_id}`)
        }

    }

    const truncate = (str) => {
        return str.length > 100 ? str.substring(0, 97) + "..." : str;
    }

    const removeHandler = (id) => {
        console.log('favourites', favourites)
        const removedFav = favourites.filter((item) => item.newsId !== id)
        console.log('removedFav', removedFav)
        dispatch(profileEdit(userId, { favourites: removedFav }))
    }

    return (
        <>
            {
                mode && mode === 'fav' ?
                    // <div className='fav-container fav-container'>
                    <div className='card-container fav-container'>
                        <div className='image'>
                            <img height='35%' width='100%' src={newsImage}></img>
                        </div>
                        <div className='heading'>
                            <h3>{newsheading}</h3>
                            <button className='text-button' onClick={() => { removeHandler(newsId) }} type='button'>Remove</button>
                        </div>
                        <div className='description'>
                            {/* <p>{description}</p> */}
                            <p>{truncate(newsDescription)}</p>
                        </div>
                        <div className='button-section'><button className='primary' type='button' onClick={clickHandler}>View</button></div>
                    </div>
                    //</div>
                    :
                    <div className={`card-container ${props.width}`}>
                        <div className='image'>
                            <img height='35%' width='100%' src={image}></img>
                        </div>
                        <div className='heading'>
                            <h3>{heading}</h3>
                        </div>
                        <div className='description'>
                            {/* <p>{description}</p> */}
                            <p dangerouslySetInnerHTML={{ __html: truncate(description) }}>{}</p>
                        </div>
                        <div className='button-section'><button className='primary' type='button' onClick={clickHandler}>View</button></div>
                    </div>
            }
        </>
    )
}