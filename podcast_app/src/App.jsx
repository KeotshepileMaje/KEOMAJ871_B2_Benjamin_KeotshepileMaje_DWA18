import './App.css'
import Navbar from './components/header/Navbar'
// import data from './data'
import MainContent from './components/MainContent'
// import { useState } from 'react';
import ThemeToggle from './components/header/Theme'

export default function App() {

    return (
        <div>
            <ThemeToggle />
            <Navbar />
            <div className='content'>
                <div className='sidebar'>
                    <p>Favourite</p>
                    <div>                    
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                <MainContent />  
            </div>      
        </div>
    )
}
