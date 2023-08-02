import Button from 'react-bootstrap/Button'

export default function CustomShowArrangement ({activeButton, handleButtonClick}) {

    return (
        <div className="d-grid gap-2">
            <Button
                variant={activeButton === 'Default' ? 'primary' : 'light'}
                onClick={() => handleButtonClick('Default')}
            >
                Default
            </Button>
            <Button
            variant={activeButton === 'A-Z' ? 'primary' : 'light'}
            onClick={() => handleButtonClick('A-Z')}
            >
                A-Z
            </Button>
            <Button
            variant={activeButton === 'Z-A' ? 'primary' : 'light'}
            onClick={() => handleButtonClick('Z-A')}
            >
                Z-A
            </Button>
            <Button
            variant={activeButton === 'Latest date' ? 'primary' : 'light'}
            onClick={() => handleButtonClick('Latest date')}
            >
                Latest date
            </Button>
            <Button
            variant={activeButton === 'Oldest date' ? 'primary' : 'light'}
            onClick={() => handleButtonClick('Oldest date')}
            >
                Oldest date
            </Button>
        </div> 
    )
}