import React from 'react'
import { Link } from 'react-router-dom'
import { VariablesPagePopup } from '../components/VariablesPagePopup/VariablesPagePopup'
import { useVariableId } from '../hooks/useVariableId'
import arrow from '../assets/VariablesPage/arrow_left.png'

import '../styles/variableIdPage.scss'
import background from '../assets/MainPage/main_background.jpg'


export const VariableIdPage = () => {
    const { variable, isLoading, resMessage } = useVariableId()

    return (
        <>
            <img src={background} alt="background" className='variables__background' />
            <main className='variable'>
                {!isLoading ?
                    <>
                        <Link className='go_back_btn' to='/variables'><img src={arrow} alt="goBack" className='arrow_back' /></Link>
                        <ul className="variable__list">
                            {variable.map(variable =>
                                <ul
                                    className='variable__list__item'
                                    key={variable.ID}
                                >
                                    <li><strong>Name</strong>: {variable.Name}</li>
                                    <li className='variable__desc'><strong>Description</strong>: {variable.Description}</li>
                                    <li><strong>DataType</strong>: {variable.DataType}</li>
                                    {variable.GroupName && <li className='variable__desc'><strong>GroupName</strong>: {variable.GroupName}</li>}
                                </ul>
                            )}
                        </ul>
                        <VariablesPagePopup resMessage={resMessage} />
                    </>
                    :
                    <div className='variable__loader__wrapper'>
                        <div className='loader'><div></div></div>
                    </div>
                }
            </main>
        </>
    )
}
