import React, { useEffect } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsCollections } from '../actions/newsAction'
import Footer from '../components/footer'


export default function LinkScreen(props) {
    const { path } = props.match
    const link = path.substring(1)

    const newsList = useSelector((state) => state.newsList)
    const { error, news, loading } = newsList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(newsCollections({ link }))
    }, [])

    const headingSetter = () => {
        switch (link) {
            case "academics":
                return "Academics"
            case "sports":
                return "Sports"
            case "culture":
                return "Culture"
            case "events":
                return "Events"
            default:
                return ''
        }
    }

    return (
        <>
            {
                error ? <p>{error}</p>
                    :
                    loading ? 'Loading...'
                        :
                        <div className='main-container'>
                            <h2>{headingSetter()}</h2>
                            <div className='inner-container'>
                                {
                                    news && news.map((item) => (
                                        <Card data={item} history={props.history} width={'card-width'}></Card>
                                    ))
                                }
                            </div>
                        </div>
            }
            <Footer />
        </>
    )
}