import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function EpisodesModal({ show, handleClose, selectedSeasonData }) {
    if (!selectedSeasonData) return null;

    function mappingOverEpisodes(data) {
        const episodeStore = data.episodes.map((episodeData) => {
            return (
                <div className='episode_data' key={episodeData.episode}>
                    <h4>Episode: {episodeData.episode}</h4>
                    <h5>{episodeData.title}</h5>
                    <p>Description: {episodeData.description}</p>
                    <audio controls>
                        <source src={episodeData.file} type="audio/mpeg" />
                    </audio>
                </div>
            );
        });
        return episodeStore;
    }

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            backdrop="static" 
            keyboard={false}
            fullscreen
        >
        <Modal.Header >
            <div className='season-view'>
            <img src={selectedSeasonData.image} width= '300px'/>
            <Modal.Title>Season {selectedSeasonData.season}</Modal.Title>
            </div>
        </Modal.Header>
        <Modal.Body>{mappingOverEpisodes(selectedSeasonData)}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
    );
}