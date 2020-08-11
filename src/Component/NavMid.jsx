import React from 'react'

const NavMid = () => {
    return (
        <div className='container pt-5 pb-5'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="/"><strong>Categories:</strong></a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Most View</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Top 3 Days</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Top 7 Days</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Top 30 Days</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavMid
