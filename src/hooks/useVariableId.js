import { useState, useEffect } from "react"
import axios from 'axios'

export const useVariableId = () => {
    const [variable, setVariable] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [resMessage, setResMessage] = useState('')

    async function fetchVariableId() {
        try {
            const id = +document.location.pathname.split('/').slice(-1).join()
            const { data } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
            const variableId = data.Results.filter(result => result.ID === id)
            setResMessage(data.Message)
            setVariable(variableId)
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchVariableId()
    }, [])

    return { variable, isLoading, resMessage }
}