import React from 'react'
const ItemIcon = (props) => {
    return (
        <div>
            <a className="nav-link" href={props.dataLink}>
                <ion-icon size="large" name={props.dataIcon}></ion-icon>
            </a>
        </div>
    )
}

export default ItemIcon
