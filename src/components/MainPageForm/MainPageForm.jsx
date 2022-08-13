import React from 'react'

import './MainPageForm.scss'

export const MainPageForm = ({ vinNum, setVinNum, searchAndAddVin, error }) => {
    return (
        <form className='main__form'>
            <input
                name='vinInput'
                type="text"
                className='main__input'
                placeholder={error ? 'Please enter the correct VIN number' : 'VIN...'}
                value={vinNum}
                onChange={e => setVinNum(e.target.value.toUpperCase())}
            />
            <button
                className='main__button'
                onClick={searchAndAddVin}
            >Check VIN</button>
        </form>
    )
}
