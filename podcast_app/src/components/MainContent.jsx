import React, { useState } from 'react'
import ShowSeasons from './main/ShowSeasons'
import ShowCards from './main/ShowCards'
// import data from '../data'
import Spinner from 'react-bootstrap/Spinner';
import './MainContent.css'
import Sidebar from './sidebar/Sidebar';
import CustomShowArrangement from './sidebar/CustomShowArrangement';
import Search from './header/Search';
import Accordion from 'react-bootstrap/Accordion'
import Fuse from 'fuse.js'
import Favourite from './sidebar/Favourite';

export default function MainContent () {
    
    const [preview, setPreview] = React.useState([])

    const [showData, setShowData] = React.useState(null)

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

    const [searchInput, setSearchInput] = useState({
        search : ''
    })

    function handleSearchInput (event) {
        const {name, value} = event.target
        setSearchInput(
            prevInput => ({
                ...prevInput,
                [name]: value
            }))
    }

    const fuse = new Fuse(preview, {
        keys: [
            'title',
            // 'genres'
        ],
        includeScore: true,
        threshold: 0.5,
    });

    const results = fuse.search(searchInput.search)
    const searchResults = searchInput.search === '' ? preview : results.map(character => character.item)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [activeButton, setActiveButton] = useState('Default');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    function sortingData() {
        const defaultArrange = preview
        const arrangeA_Z = [...preview].sort((a, b) => a.title.localeCompare(b.title))
        const arrangeZ_A = [...preview].sort((a, b) => b.title.localeCompare(a.title))
        const ascendingOrder = [...preview].sort((a, b) => new Date(a.updated) - new Date(b.updated))
        const descendingOrder = [...preview].sort((a, b) => new Date(b.updated) - new Date(a.updated))

        if (searchInput.search !== '') {
            return searchResults 
        }

        if (activeButton === 'Default' ) {
            return defaultArrange
        }
        if (activeButton === 'A-Z' ) {
            return arrangeA_Z
        }
        if (activeButton === 'Z-A' ) {
            return arrangeZ_A
        }
        if (activeButton === 'Latest date' ) {
            return ascendingOrder
        }
        if (activeButton === 'Oldest date' ) {
            return descendingOrder
        }
    }

    const dataSorting = sortingData()

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
                    numOfSeasons = {podcast.seasons}
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
                <Search 
                    preview = {preview}
                    searchInput = {searchInput}
                    setSearchInput = {setSearchInput}
                    handleSearchInput = {handleSearchInput} 
                 />
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Discover</Accordion.Header>
                        <Accordion.Body>
                            <CustomShowArrangement 
                                handleButtonClick = {handleButtonClick}
                                activeButton = {activeButton}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Favourite/>
            </Sidebar>
            <div className='container-sm'>  
                <div className="show-container">{podcastTitle}</div>
                {
                    showData !== null 
                    &&
                    <ShowSeasons 
                        data = {showData} 
                        handleClose = {handleClose}
                        show = {show}
                    />
                }
            </div>
        </div>      
    )
}