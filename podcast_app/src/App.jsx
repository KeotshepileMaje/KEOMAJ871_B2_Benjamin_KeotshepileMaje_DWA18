import React from 'react'
import './App.css'
import ShowSeasons from './components/main/ShowSeasons'
import ShowCards from './components/main/ShowCards'
import Navbar from './components/header/Navbar'
import data from './data'
import Spinner from 'react-bootstrap/Spinner';


export default function App() {
    const [preview, setPreview] = React.useState([])

    const [showData, setShowData] = React.useState(data)

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

    // React.useEffect(
    //     () => {
    //         fetch('https://podcast-api.netlify.app/id/5675')
    //             .then( res => res.json())
    //             .then( data => {
    //                 setShowData(data)
    //                 setLoading(false)
    //             })
    //     }, []
    // )

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
        <div>
            <Navbar />
            <div> 
                <div className="show-container">{podcastTitle}</div>
                <ShowSeasons 
                    data = {showData} 
                    handleClose = {handleClose}
                    show = {show}
                />
            </div>
        </div>
    )
}

