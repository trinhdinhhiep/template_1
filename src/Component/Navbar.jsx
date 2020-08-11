import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <a className='navbar-brand' href='/'>
                    <img height={20} src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png' alt='logo'></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <a className="nav-link" href="\">Features</a>
                        <a className="nav-link" href="\">Pricing</a>
                        <a className="nav-link" href="\">Pricing</a>
                        <a className="nav-link" href="\">Pricing</a>
                    </div>
                    <ul className="navbar-nav list-inline">
                        <li className="dropdown-notification">
                            <a className="nav-link" href="\">
                                <ion-icon size="large" name="cart-outline"></ion-icon>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA">
                                <ion-icon size="large" name="logo-youtube"></ion-icon>
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="https://www.facebook.com/mdbootstrap">
                                <ion-icon size="large" name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://twitter.com/MDBootstrap">
                                <ion-icon size="large" name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit">
                                <ion-icon size="large" name="logo-github"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
