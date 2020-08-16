import React, { Component } from 'react';
import Content from './ContentNavbar'
import Icon from './Icon'
class Navbar extends Component {
    state = {
        content: ['Features', 'Features1', 'Features2', 'Features3']
    }
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar pos">
                    <a className='navbar-brand' href='/'>
                        <img height={20} src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png' alt='logo'></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto mb-2 mb-lg-0">
                            {this.state.content.map(item => (<Content data={item} />))}
                        </div>
                        <div >
                            <Icon />
                        </div>
                        {/* <li className="nav-item">
                                <a className="nav-link" href="\">
                                    <ion-icon size="large" name="cart-outline"></ion-icon>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA">
                                    <ion-icon size="large" name="logo-youtube"></ion-icon>
                                </a>
                            </li>
                            <li className="nav-item">
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
                            </li> */}

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

