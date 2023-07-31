import React from 'react'
import ShowSeasons from './main/ShowSeasons'
import ShowCards from './main/ShowCards'
// import data from '../data'
import Spinner from 'react-bootstrap/Spinner';
import './MainContent.css'

export default function MainContent () {
    const [preview, setPreview] = React.useState([])

    const [showData, setShowData] = React.useState()

    const [show, setShow] = React.useState(false)

    const [loading, setLoading] = React.useState(true)

    React.useEffect(
        () => {
            fetch('https://podcast-api.netlify.app/shows')
                .then( res => res.json())
                .then( data => {
                    setPreview(data)
                    setLoading(false)
                })
        }, []
    )

    React.useEffect(
        () => {
            fetch('https://podcast-api.netlify.app/id/5675')
                .then( res => res.json())
                .then( data => {
                    setShowData(data)
                    setLoading(false)
                })
        }, []
    )

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const podcastTitle = preview.map(
        (podcast) => {
            return (
                <ShowCards
                    key = {podcast.id} 
                    image = {podcast.image}
                    handleWatchShow = {podcast}
                    title = {podcast.title}
                    genres = {podcast.genres}
                    handleClick = {handleShow}

                    description = {podcast.description}

                 />
            )
        }
    )

    if (loading) {
        return <div className='loader'><Spinner animation="grow" /></div>;
    }

    return (
            <div className='container-sm'>  
                <div className="show-container">{podcastTitle}</div>
                <ShowSeasons 
                    data = {showData} 
                    handleClose = {handleClose}
                    show = {show}
                />
            </div>
    )
}
