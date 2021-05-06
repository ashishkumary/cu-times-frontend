import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsDetails } from '../actions/newsAction'
import { profileEdit } from '../actions/userAction'
import Footer from '../components/footer'


export default function NewsScreen(props) {
    const productId = props.match.params.id
    const newsData = useSelector((state) => state.newsData)
    const { error, loading, newsDetail = {} } = newsData
    const { author, createdAt, description, heading, image, category } = newsDetail || {}

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin || {}
    const { _id = '', favourites } = userInfo || {}

    const editProfile = ((state) => state.editProfile)
    // console.log('editProfile', editProfile)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(newsDetails(productId))
    }, [favourites])

    const favourateHandler = () => {
        const item = {
            newsId: productId,
            newsheading: heading,
            newsImage: image,
            newsDescription: description
        }
        if (!(favourites && favourites.some((item) => item.newsId === productId))) {
            if (userInfo) {
                favourites.push(item)
                dispatch(profileEdit(_id, { favourites }))
            } else {
                alert('Please login')
            }

        } else {
            alert('Product already added')
        }

    }

    return (
        <>
            {
                loading ? 'Loading...'
                    :
                    error ? <p>{error}</p>
                        :
                        <div className='news-container'>
                            <div className='news-heading-section'>
                                <h2>{heading}</h2>
                                <button
                                    disabled={
                                        userInfo && favourites && favourites.some((item) => item.newsId === productId)
                                    }
                                    type='button'
                                    onClick={favourateHandler}>
                                    Add favourate
                </button>
                            </div>
                            <div className='author-date-section'>
                                <span className='author'>Author: {author}</span>
                                <span className='date'>Date: {createdAt && createdAt.substring(0, 10)}</span>
                                <span className='category'>category: {category}</span>
                            </div>
                            <div className='news-banner-section'>
                                <img src={image} width='100%' height='300px'></img>
                            </div>
                            <div className='news-description-section'>
                                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                            </div>
                        </div >
            }
            <Footer />
        </>
    )
}