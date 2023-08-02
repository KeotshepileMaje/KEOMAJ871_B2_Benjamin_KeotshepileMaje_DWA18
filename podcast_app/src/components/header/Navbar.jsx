export default function Navbar () {

    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src='/public/soundwavehub-low-resolution-logo-color-on-transparent-background.png' width='30px'/></a>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <a className="navbar-brand" href="#"><div style = {{color: "white"}}>ABOUT</div></a>
                    <button className="btn btn-outline-success" type="submit">Sign Out</button>
                </div>
            </div>
        </nav> 
    )
}