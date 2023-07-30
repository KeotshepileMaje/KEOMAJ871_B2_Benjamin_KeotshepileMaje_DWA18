// import data from '../../data.jsx'
import './ShowSeasons.css'
// import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EpisodesModal from './EpisodesModal'

export default function ShowSeason(props) {
    const [selectSeason, setSelectSeason] = useState(null);

    const [showEpisodesModal, setShowEpisodesModal] = useState(false)

    function handleSeasonClick(seasonNumber) {
        setShowEpisodesModal(true)
        setSelectSeason(
            (prevSeason) =>{
            return prevSeason === seasonNumber ? null : seasonNumber 
            }
        );

    }

    function renderSeasons() {
        return (
            <div>
                {props.data.seasons.map((seasonData) => (
                    <div key={seasonData.season}>
                        <div
                            className='season_block' 
                            onClick={(() => handleSeasonClick(seasonData.season))}
                        >
                            Season: {seasonData.season}
                        </div>
                    </div>
                    ))
                }
            </div>
        );
    }

    // Function to open the episodes modal
    function openEpisodesModal() {
    setShowEpisodesModal(true);
    }

    // Function to close the episodes modal
    function closeEpisodesModal() {
    setShowEpisodesModal(false);
    }

    return (
        <>
            <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Number of Seasons: {props.data.seasons.length}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {renderSeasons()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Render the episodes modal */}
            <EpisodesModal
            show={showEpisodesModal}
            handleClose={closeEpisodesModal}
            selectedSeasonData={props.data.seasons.find((seasonData) => seasonData.season === selectSeason)}
            />
        </>
    );
}