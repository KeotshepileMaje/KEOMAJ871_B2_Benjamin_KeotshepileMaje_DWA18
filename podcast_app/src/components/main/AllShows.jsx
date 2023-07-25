import React from 'react'
import './AllShows.css'

export default function AllShows(props) {

    const [showDescription, setShowDescription] = React.useState(false)

    function toggleShowDescription() {
        setShowDescription(
            (prev) => !prev
        )
    }

    return (
        <div className='show_preview'>
            <div 
                className='podcast_show_image'
                onClick = {props.handleClick}
                >
                <img src={props.image}  id={props.id}/>
            </div>
            <div className='podcast_show_info'>
                <h2>{props.title}</h2>
                <p>Genre: {props.genres}</p>
                <p>Last added Episode: {props.updated}</p>
                {
                    showDescription &&
                    <p>Description: {props.description}</p>
                }
                <button
                    onClick = {toggleShowDescription}
                >{showDescription ? 'hide' : 'Show'} Description </button>
            </div>
        </div>
    )
}
