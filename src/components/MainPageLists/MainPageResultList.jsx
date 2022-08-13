import React from 'react'

import './MainPageLists.scss'

export const MainPageResultList = ({ results, isLoading }) => {

    return (
        <ul className="main__results__list">
            <h3 className='main__list__title'>Results</h3>
            {!isLoading ?
                <>
                    {
                        results.map((result, idx) =>
                            <ul
                                className='main__list__item'
                                key={idx} //I added the key here as an index because we will not change this array in any way. In this case the index will be a unique identifier
                            >
                                <li><strong>Variable</strong>: {result.Variable}</li>
                                <li><strong>Value</strong>: {result.Value}</li>
                            </ul>
                        )
                    }
                </>
                :
                <div className='loader'><div></div></div>
            }
        </ul >
    )
}
