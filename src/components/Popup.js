import React from 'react'

function popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-bth">close</button>
                {props.children}
            </div>
        </div>
    ) : '';
}

export default popup