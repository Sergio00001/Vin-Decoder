import React from 'react'
import { Link } from 'react-router-dom'
import { VariablesPagePopup } from '../components/VariablesPagePopup/VariablesPagePopup'
import { useVariables } from '../hooks/useVariables'
import arrow from '../assets/VariablesPage/arrow_left.png'
import { useNavigate } from 'react-router-dom'

import '../styles/variablesPage.scss'
import background from '../assets/MainPage/main_background.jpg'

export const VariablesPage = () => {
    const { results, resMessage, isLoading } = useVariables()
    const navigate = useNavigate()

    const openIdPage = (id) => {
        navigate(`/variables/${id}`)
    }

    return (
        <>
            <img src={background} alt="background" className='variables__background' />
            <main className='variables'>
                {!isLoading ?
                    <>
                        <Link className='go_back_btn' to='/'><img src={arrow} alt="goBack" className='arrow_back' /></Link>
                        <ul className="variables__list">
                            {results.map((result, idx) =>
                                <ul
                                    className='variables__list__item'
                                    key={idx}
                                >
                                    <li><button
                                        className='variable__btn'
                                        onClick={() => openIdPage(result.VariableId)}
                                    ><strong>Variable</strong></button>: {result.Variable}</li>
                                    <li><strong>Value</strong>: {result.Value}</li>
                                </ul>
                            )}
                        </ul>
                        <VariablesPagePopup resMessage={resMessage} />
                    </>
                    :
                    <div className='variables__loader__wrapper'>
                        <div className='loader'><div></div></div>
                    </div>
                }
            </main>
        </>
    )
}
