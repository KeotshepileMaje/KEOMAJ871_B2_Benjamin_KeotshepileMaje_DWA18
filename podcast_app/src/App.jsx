import React from 'react'
import './App.css'
import ShowSeasons from './components/main/ShowSeasons'
import AllShows from './components/main/AllShows'
import Navbar from './components/header/Navbar'
import data from './data'

export default function App() {
    const [preview, setPreview] = React.useState([])

    const [showData, setShowData] = React.useState(data)

    const [show, setShow] = React.useState(false)

    // console.log(showData)

    React.useEffect(
        () => {
            fetch('https://podcast-api.netlify.app/shows')
                .then( res => res.json())
                .then( data => setPreview(data))
        }, []
    )

    function handleClick () {
        console.log('Clicked')
        setShow(
            (prev) => !prev
        )

    }
    const [showDescription, setShowDescription] = React.useState(false)

    function toggleShowDescription() {
        setShowDescription(
            (prev) => !prev
        )
    }

    const podcastTitle = preview.map(
        (podcast) => {
            return (
                <AllShows
                    key = {podcast.id} 
                    image = {podcast.image}
                    handleWatchShow = {podcast}
                    title = {podcast.title}
                    genres = {podcast.genres}
                    handleClick = {handleClick}

                    description = {podcast.description}

                 />
            )
        }
    )

    return (
        <div>
            <Navbar />
            <div>
                <button
                    onClick= {handleClick}
                >Go back home</button>
            </div>
            <div>
                {show ? 
                <ShowSeasons data = {data} />:
                <div className="show-container">{podcastTitle}</div>
                }
            </div>
        </div>
    )
}
