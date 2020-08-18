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
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white scrolling-navbar pos">
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
                            <Icon displayIcon='navbar-nav' />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

