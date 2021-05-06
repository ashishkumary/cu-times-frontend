import React, { useEffect } from 'react'
import Card from '../components/card'
import { data } from '../data'
import CarouselComponent from '../components/carousel'
import { useDispatch, useSelector } from 'react-redux'
import { newsCollections } from '../actions/newsAction'
import Footer from '../components/footer'


export default function HomeScreen(props) {

    const newsList = useSelector((state) => state.newsList)
    console.log('props', props)
    const { error, news, loading } = newsList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(newsCollections({}))
    }, [])

    return (
        <>
            {
                error ? <p>{error}</p>
                    :
                    loading ? 'Loading...'
                        :
                        <div className='home-container'>
                            <div className='banner-section'>
                                <img width='100%' src='./images/cu-banner-home.jpeg'></img>
                            </div>
                            <div className='carousel-section'>
                                <h2>Latest News</h2>
                                <CarouselComponent history={props.history} data={news}></CarouselComponent>
                            </div>
                            <div className='developers-section'>
                                <h2>Our Team</h2>
                                <div className='inner'>
                                    <div className='developer'>
                                        <img width='80px' height='80px' src="./images/ashish.jpg"></img>
                                        <p>I am Ashish Kumar , one of the admin and developer of Cu Times website. Currently pursuing B.E. in computer science engineering in Chandigarah University.</p>
                                    </div>
                                    <div className='developer'>
                                        <img width='80px' height='80px' src="./images/niharika.jpeg"></img>
                                        <p>I am Niharika currently pursuing BTECH (computer science) from chandigarh university in 3rd year.</p>
                                    </div>
                                    <div className='developer'>
                                        <img width='80px' height='80px' src='./images/nitin.jpeg'></img>
                                        <p>I am Nitin Katiyar currently pursuing BTECH (computer science) from chandigarh university in 3rd year.</p>
                                    </div>
                                    <div className='developer'>
                                        <img width='80px' height='80px' src='./images/chandana.jpg'></img>
                                        <p>I am Chandana , social media manager at oureducation and working at instituterank.com My website - blog.oureducation.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            }
            <Footer />
        </>
    )
}