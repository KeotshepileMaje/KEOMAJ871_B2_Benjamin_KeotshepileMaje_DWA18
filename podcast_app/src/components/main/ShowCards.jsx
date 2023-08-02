import React from 'react'
import './ShowCards.css'
import genres from '../../data/genreData'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Favourite from '../sidebar/Favourite';
import { useState } from 'react';

export default function ShowCards(props) {

    const [showDescription, setShowDescription] = React.useState(false)
    const [hovered, setHovered] = useState(false)

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
                    {foundGenre ? `${foundGenre.genre},` : "Unknown Genre"}
                </span>
            );
        })
        return podcast
    }

    const [imageError, setImageError] = React.useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    const [favourite, addFavorite] = useState(false)

    function togggleFavourite() {
        addFavorite((prev) => !prev)
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
                        {
                        showDescription && <span>Description: {props.description}</span>
                        }
                        <Favourite 
                            favourite = {favourite}
                            togggleFavourite = {togggleFavourite}
                        />
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
                </div>
            </Card.Body>
        </Card>
    )
}






























{/* <div className='show_preview'>
<div className='podcast_show_image'
    onClick = {props.handleClick}
    >
    <img src={props.image}  id={props.id}/>
</div>
<div className='podcast_show_info'>
    <div>
        <span>NumOfSeasons {props.updated}</span>
        {
            showDescription && <span>Description: {props.description}</span>
        }
        <span>★★★</span>
        <span>❤</span>
        <button onClick = {toggleShowDescription}>More</button>
    </div>
    <div>Genre: {findGenre(props.genres)}</div>
</div>
</div> */}













// import React from 'react'
// import './App.css'


// export default function App() {

//     return(
//         <div className="card">
//             <img src='/public/project-in-production.webp' /> 
//             <div className="infoDispay">
//                 <div className='infoOnshow'>
//                     <span>NumOfSeasons</span>
//                     <span>★★★</span>
//                     <span>❤</span>
//                     <span>More</span>
//                 </div>
//                 <h3>Heading</h3>
//             </div>
//         </div>
//     )
// }


// const [selectSeason, setSelectSeason] = React.useState(null);

// function handleSeasonClick(seasonNumber) {
//     setSelectSeason(
//         (prevSeason) => (prevSeason === seasonNumber ? null : seasonNumber)
//     );
// }

// function renderSeasonsOrEpisodes() {
//     return (
//         <div>
//             {props.data.seasons.map((seasonData) => (
//                 <div key={seasonData.season}>
//                     <h2 onClick={() => handleSeasonClick(seasonData.season)}>
//                     Season: {seasonData.season}
//                     </h2>
//                     {
//                         selectSeason === seasonData.season && 
//                         renderEpisodes(seasonData)
//                     }
//                 </div>
//                 ))
//             }
//         </div>
//     );
// }




