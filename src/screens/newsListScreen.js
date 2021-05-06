import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsCollections, newsDelete } from '../actions/newsAction'
import HorizontalCard from '../components/horizontalCard'
import { usersList, userDelete } from '../actions/userAction'


export default function NewsListScreen(props) {

    console.log('props', props)

    const newsList = useSelector((state) => state.newsList)
    const { news, loading, error } = newsList

    const deleteNews = useSelector((state) => state.deleteNews)
    const { message, loading: deleteLoading, success, error: deleteError } = deleteNews
    //const [success, setSuccess] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        //if (!news || success) {
        dispatch(newsCollections({}))
        // setSuccess(false)
        //}
        //setSuccess(false)
    }, [success])

    const deleteHandler = (id) => {
        dispatch(newsDelete(id))
    }

    return (
        <>
            {
                loading ? 'Loading'
                    :
                    error ? <p>{error}</p>
                        :
                        <div className='list-container'>
                            {
                                news && news.map((item) => (
                                    // <HorizontalCard delete={setSuccess} data={item} history={props.history}></HorizontalCard>
                                    <div className='Horizontal-card-container'>
                                        {/* <Link to={`/profile/${_id}`}> */}
                                        <div>{item.heading}</div>
                                        <div className='button-container'>
                                            <button className='primary' onClick={() => props.history.push(`/news/${item._id}`)}>View</button>
                                            <button className='primary' type='button' onClick={() => deleteHandler(item._id)}>Delete</button>
                                        </div>
                                        {/* </Link> */}
                                        {deleteLoading && 'Loading...'}
                                        {deleteError && <p>{deleteError}</p>}
                                    </div>
                                ))
                            }

                        </div>
            }
        </>
    )
}