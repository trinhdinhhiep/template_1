import React from 'react'

const CardImg = (props) => {
    return (
        <div className='col-sm-4 mb-4'>
            <div className="card" style={{ width: '22rem' }}>
                <img src={props.dataImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default CardImg
