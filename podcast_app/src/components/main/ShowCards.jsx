import './ShowCards.css'
import genres from '../../data/genreData'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

export default function ShowCards(props) {

    const [showDescription, setShowDescription] = useState(false)

    function toggleShowDescription() {
        setShowDescription(
            (prev) => !prev
        )
    }

    function findGenre(podcastGenres) {
        const podcast = podcastGenres.map((genreNum) => {
            const foundGenre = genres.find((genre) => genre.id === genreNum);
            return (
                <span key={genreNum}>
                    {foundGenre ? foundGenre.genre : "Unknown Genre"}
                </span>
            );
        })

        return podcast
    }

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    //Time stamp to change into Lat updated into yy/mm/dd
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const formattedDate = `${date.getUTCDate().toString().padStart(2, '0')}${(date.getUTCMonth() + 1).toString().padStart(2, '0')}//${date.getUTCFullYear().toString().slice(2)}`;
        return formattedDate;
      }
    return (
        <Card className='custom-card'>
            {imageError ? 
                (
                <div className='image-block'>
                    <Spinner animation='border" role="status'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                ): 
                (
                    <Card.Img
                        variant='top'
                        src={props.image}
                        id={props.id}
                        onError={handleImageError}
                        onClick = {props.handleClick}
                        loading='lazy'
                    />
                ) 
            }

            <Card.Body>
                <div className='podcast_show_info'>
                    <div className='info-container'>
                        <span>S{props.numOfSeasons}</span>
                        <button onClick = {toggleShowDescription}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg>
                        </button>
                    </div>
                    <div className='genre' 
                        style= {{   fontSize: '14px',
                            display: 'inline-block'}}
                    >
                        {findGenre(props.genres)}
                    </div>
                    <div className="card-text">
                        <small className="text-body-secondary">Last updated {formatTimestamp(props.updated)}</small>
                    </div>
                    {
                        showDescription && <span>Description: {props.description}</span>
                        }
                </div>
            </Card.Body>
        </Card>
    )
}