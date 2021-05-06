import React, { useEffect } from 'react'
import Card from '../components/card'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer'


export default function FavourateScreen(props) {
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo = {}, error, loading } = userSignin || {}
    const { favourites = [] } = userInfo || []

    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    return (
        <>
            {
                error ? <p>{error}</p>
                    :
                    loading ? 'Loading...'
                        :
                        <div className='main-container'>
                            <h2>Favourites</h2>
                            <div className='inner-container'>
                                {
                                    favourites && favourites.map((item) => (
                                        <Card data={item} mode={'fav'} history={props.history}></Card>
                                    ))
                                }
                            </div>
                        </div>
            }
            <Footer />
        </>
    )
}