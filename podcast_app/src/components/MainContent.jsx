import React, { useState } from 'react'
import ShowSeasons from './main/ShowSeasons'
import ShowCards from './main/ShowCards'
// import data from '../data'
import Spinner from 'react-bootstrap/Spinner';
import './MainContent.css'
import Sidebar from './sidebar/Sidebar';
import CustomShowArrangement from './sidebar/CustomShowArrangement';

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

    /*
        ✅ User can arrange the list of shows by title from A-Z
        ✅ User can arrange the list of shows by title from Z-A
        ✅ User can arrange the list of shows by date updated in ascending order
        ✅ User can arrange the list of shows by date updated in descending order
        ✅ User can filter shows by title through a text input
        ✅ User can find shows based on fuzzy matching of strings (you can use something like https://fusejs.io/)
        ✅ Automatically filter shows by genre if the genre label is clicked on
    */

    const [activeButton, setActiveButton] = useState('Default');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    const defaultArrange = preview
    const arrangeA_Z = [...preview].sort((a, b) => a.title.localeCompare(b.title))
    const arrangeZ_A = [...preview].sort((a, b) => b.title.localeCompare(a.title))
    const ascendingOrder = [...preview].sort((a, b) => new Date(a.updated) - new Date(b.updated))
    const descendingOrder = [...preview].sort((a, b) => new Date(b.updated) - new Date(a.updated))

    function abc() {
        if (activeButton === 'Default' ) {
            return defaultArrange
            // return 'DDDD'
        }
        if (activeButton === 'A-Z' ) {
            return arrangeA_Z
            // return 'aaaaa'
        }
        if (activeButton === 'Z-A' ) {
            return arrangeZ_A
            // return 'zzzzzzz'
        }
        if (activeButton === 'Latest date' ) {
            return ascendingOrder
            // return 'llllll'
        }
        if (activeButton === 'Oldest date' ) {
            return descendingOrder
            // return 'ooooo'
        }
    }

    const dataSorting = abc()

    console.log(dataSorting)

    const podcastTitle = dataSorting.map(
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
        <div className='content'>
            <Sidebar>
                <CustomShowArrangement 
                    handleButtonClick = {handleButtonClick}
                    activeButton = {activeButton}
                />
            </Sidebar>
            <div className='container-sm'>  
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

      
