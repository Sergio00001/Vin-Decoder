import React, { useState } from 'react'

import './VariablesPagePopup.scss'

export const VariablesPagePopup = ({ resMessage }) => {
    const [showPopup, setShowPopup] = useState(true)
    return (
        <div className={showPopup ? 'popup__wrapper active' : 'popup__wrapper'}>
            <div className={showPopup ? 'popup active' : 'popup'}>
                <p className='popup__message'>{resMessage}</p>
                <button
                    className='popup__btn'
                    onClick={() => setShowPopup(false)}
                >OK</button>
            </div>
        </div>
    )
}
