import React from 'react'
// import data from '../../data.jsx'

export default function ShowSeason(props) {

    return (
        <div>
            <h2>Number of Seasons: {props.data.seasons.length}</h2>
            {props.data.seasons.map((data) => {
                return (
                    <div key={data.season}>
                        <h2>Season: {data.season}</h2> 
                        {data.episodes.map((episodeData) => {
                            return (
                                <div className='episode_data' key={episodeData.episode}>
                                    <div>Episode: {episodeData.episode}</div>
                                    <h3>{episodeData.title}</h3>
                                    <p>Description: {episodeData.description}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })
            }
        </div>
    )
}