import React from 'react'
import './ShowCards.css'
import genres from '../../data/genreData'
import Card from 'react-bootstrap/Card';

export default function ShowCards(props) {

    const [showDescription, setShowDescription] = React.useState(false)

    function toggleShowDescription() {
        setShowDescription(
            (prev) => !prev
        )
    }

    function findGenre(podcastGenres) {
        const podcast = podcastGenres.map((genreNum) => {
            const foundGenre = genres.find((genre) => genre.id === genreNum);
            return (
                <div key={genreNum}>
                    {foundGenre ? foundGenre.genre : "Unknown Genre"}
                </div>
            );
        })

        return podcast
    }

    const [imageError, setImageError] = React.useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    return (
        <Card className='custom-card'>
            {imageError ? 
                (
                <div className='image-block'>
                    Image not found
                </div>
            ): 
            (
                <Card.Img
                    variant="top"
                    src={props.image}
                    id={props.id}
                    onError={handleImageError}
                    onClick = {props.handleClick}
                    loading="lazy"
                />
            ) }

            <Card.Body>
                <div className='podcast_show_info'>
                        <span>NumOfSeasons {props.updated}</span>
                        {
                        showDescription && <span>Description: {props.description}</span>
                        }
                        <span>★★★</span>
                        <span>❤</span>
                        <button onClick = {toggleShowDescription}>More</button>
                    <div>Genre: {findGenre(props.genres)}</div>
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




