import { useState, useEffect } from "react"
import Cookies from 'js-cookie'
import axios from 'axios'

export const useVariables = () => {
    const [results, setResults] = useState([])
    const [resMessage, setResMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    async function fetchAllVariables() {
        try {
            const vin = JSON.parse(Cookies.get('lastVins'))[0].vin
            const { data } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
            setResults(data.Results)
            setResMessage(data.Message)
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchAllVariables()
    }, [])

    return { results, resMessage, isLoading }
}