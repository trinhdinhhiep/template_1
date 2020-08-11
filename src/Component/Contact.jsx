import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="text-center align-items-center pt-3">
                <p>Follow MDB on social media</p>
                <a href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" className="btn btn-primary m-1" role="button" >
                    <ion-icon size="small" name="logo-youtube"></ion-icon>
                </a>
                <a href="https://www.facebook.com/mdbootstrap" className="btn btn-primary m-1" role="button" >
                    <ion-icon size="small" name="logo-facebook"></ion-icon>
                </a>
                <a href="https://twitter.com/MDBootstrap" className="btn btn-primary m-1" role="button">
                    <ion-icon size="small" name="logo-twitter"></ion-icon>
                </a>
                <a href="https://github.com/mdbootstrap/mdb-ui-kit" className="btn btn-primary m-1 ripple-surface" role="button">
                    <ion-icon size="small" name="logo-github"></ion-icon>
                </a>
            </div>
        </div>
    )
}

export default Contact
