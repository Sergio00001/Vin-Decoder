import React from 'react'

import './MainPageLists.scss'

export const MainPageVinsList = ({ lastVins, fetchResults }) => {
    return (
        <ul className="main__vins__list">
            <h3 className='main__list__title'>Last Vin Numbers</h3>
            {lastVins.map(vin =>
                <li
                    className='main__vins__list__item'
                    key={vin.id}
                ><button
                    className='main__list__vin'
                    onClick={() => fetchResults(vin.vin)}
                >{vin.vin}</button></li>
            )}
        </ul>
    )
}
