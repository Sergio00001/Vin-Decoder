import React, { useEffect, useState } from 'react'
import { MainPageResultList } from '../components/MainPageLists/MainPageResultList'
import { MainPageVinsList } from '../components/MainPageLists/MainPageVinsList'
import { useNavigate } from 'react-router-dom'
import { MainPageForm } from '../components/MainPageForm/MainPageForm'
import Cookies from 'js-cookie'
import axios from 'axios'

import background from '../assets/MainPage/main_background.jpg'
import '../styles/mainPage.scss'

export const MainPage = () => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [vinNum, setVinNum] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const [lastVins, setLastVins] = useState([
        { id: Date.now(), vin: 'XTA210630H1658184' }
    ])

    async function fetchResults(vin) {
        try {
            const { data } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
            const response = data.Results.filter(result => result.Value)
            setResults(response)
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false)
        }
    }

    const searchAndAddVin = e => {
        e.preventDefault()
        setError(true)
        if (vinNum && vinNum.length <= 17) {
            const vin = [{ id: Date.now(), vin: vinNum }]
            setLastVins([...vin, ...lastVins].slice(0, 5))
            setVinNum('')
            setError(false)
            setTimeout(() => {
                navigate('/variables')
            }, 0);
        }
    }

    useEffect(() => {
        if (Cookies.get('lastVins')) {
            setLastVins(JSON.parse(Cookies.get('lastVins')))
        }
    }, [])

    useEffect(() => {
        fetchResults(lastVins[0].vin)
        Cookies.set('lastVins', JSON.stringify(lastVins), { expires: 7 })
    }, [lastVins])

    return (
        <>
            <img src={background} alt="smallBackground" className='main__background' />
            <main className='main'>
                <MainPageForm
                    vinNum={vinNum}
                    setVinNum={setVinNum}
                    searchAndAddVin={searchAndAddVin}
                    error={error}
                />
                <div className='main__lists'>
                    <MainPageVinsList lastVins={lastVins} fetchResults={fetchResults} />
                    <MainPageResultList results={results} isLoading={isLoading} />
                </div>
            </main>
        </>
    )
}
