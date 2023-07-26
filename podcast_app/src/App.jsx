import React from 'react'
import './App.css'
import ShowSeasons from './components/main/ShowSeasons'
import ShowCards from './components/main/ShowCards'
import Navbar from './components/header/Navbar'
import data from './data'

export default function App() {
    const [preview, setPreview] = React.useState([])

    const [showData, setShowData] = React.useState(data)

    const [show, setShow] = React.useState(false)

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

    const podcastTitle = preview.map(
        (podcast) => {
            return (
                <ShowCards
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
                <ShowSeasons data = {showData} />:
                <div className="show-container">{podcastTitle}</div>
                }
            </div>
        </div>
    )
}