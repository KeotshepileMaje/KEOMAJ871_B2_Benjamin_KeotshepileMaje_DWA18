import { useState } from 'react';
import './App.css'
import Loggin from './components/welcome_page/Loggin';
import Home from './home';

export default function App() {

    const [loggInHome, setLogInHome] = useState(null)

    function handleLoggin(){
        setLogInHome(true)
    }

    return (
        <div>
            {/* {
                !loggInHome && 
                <Loggin
                    handleLoggin = {handleLoggin}

                 /> 
            }
            {
                loggInHome && <Home />
            } */}
            <Home />
        </div>
    )
}