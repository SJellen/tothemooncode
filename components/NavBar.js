export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top " style={{backgroundColor: "#fd7e14" }} >
            <div className="container-fluid" >
                <a className="navbar-brand" href="#">To The Moon 🚀</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{marginRight: ".5rem"}}>
                <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#card">Ticker</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#news">News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#twitter">Twitter</a>
                    </li>
                    <li className="nav-item">
                    <a href="https://www.reddit.com/r/wallstreetbets/" target="_blank" rel="noopener noreferrer" className="nav-link active" >Wallstreetbets reddit</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}