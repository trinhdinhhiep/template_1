import React, { Component } from 'react'
import ItemIcon from './ItemIcon'
class Icon extends Component {
    state = {
        data: [
            { icon: 'cart-outline', link: 'https://github.com/mdbootstrap/mdb-ui-kit' },
            { icon: 'logo-youtube', link: 'https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA' },
            { icon: 'logo-facebook', link: 'https://www.facebook.com/mdbootstrap' },
            { icon: 'logo-twitter', link: 'https://twitter.com/MDBootstrap' },
            { icon: 'logo-github', link: 'https://github.com/mdbootstrap/mdb-ui-kit' }
        ]
    }
    render() {
        return (
            <div className="d-flex flex-row">
                {this.state.data.map(e => (
                    <ItemIcon dataIcon={e.icon} dataLink={e.link} />
                ))}
            </div>
        );
    }
}

export default Icon;